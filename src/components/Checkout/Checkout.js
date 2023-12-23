import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { useState } from "react";

import {addDoc, collection, documentId, getDocs, query, where } from "firebase/firestore";

import { db } from "../../services/firebase/firebaseConfig";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import { Timestamp, writeBatch } from "firebase/firestore";

 
 
 


const Checkout = () => {
    const [loading, setLoading] = useState(false)

    const [orderId, setOrderId] = useState('')

    const { cart, totalPrice, clearCart } = useContext(CartContext)

    const createOrder = async ({name, phone, email}) => {    
        
          
         

        try{
            setLoading(true)
            const ObjOrder = {
                
                buyer: {
                    name, phone, email                    
                },                
                items: cart,
                total: totalPrice(),
                date: Timestamp.fromDate(new Date())                
            }
            

            const batch = writeBatch(db)

            const OutOfStock = []

            const ids = cart.map(prod => prod.id)

            const productsRef = collection(db, 'products')

            const orderRef = collection(db, 'orders')

            addDoc(orderRef, ObjOrder) 
                .then ((doc) => {
                   setOrderId(doc.id);
                   clearCart();

                })
                

            const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in', ids)))


            const { docs } = productsAddedFromFirestore
            console.log('Documentos obtenidos de Firestore:', docs);

            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock

                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart?.quantity

                console.log('ID del producto en Firestore:', doc.id);
                console.log('Cantidad en el carrito:', prodQuantity);
                console.log('Stock en Firestore:', stockDb);

                if(stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity })  
                    console.log('Actualizando stock en Firestore:', doc.id, 'Nuevo stock:', stockDb - prodQuantity);              
                } else{
                    OutOfStock.push({ id: doc.id, ...dataDoc})
                    console.log('Producto fuera de stock:', doc.id);
                }
                
            })
            
            
            if(OutOfStock.length === 0) {
                await batch.commit()
                console.log('Lote comprometido correctamente');

                
                const orderAdded = await addDoc(orderRef, ObjOrder) 

                setOrderId(orderAdded.id)
                clearCart()
            } else {
                console.error('Hay productos que estan fuera de stock')
            } 


            

        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)           
        }
        console.log('Orden creada con:', { name, phone, email, cart}, 'precio: $', totalPrice() );
        
    }

         
    if(loading) {
        return (
            <div>
                <h1 className="loadingorder">Se está generando su orden...por favor aguarde</h1>
            </div>                       
        )
        
    }

    if(orderId) {
        return (
            <div>
                <h1 className="thanks">Muchas gracias por su compra!</h1>
                <h2 className="orderidcompra">El Id de su orden es: <span>{orderId}</span></h2>                
            </div>
            
            
        )
    }
    
    

    return (
        <div className="createorder">
            <h1 className="finalizar">Finalizar Compra</h1>
            <CheckoutForm onSubmit={createOrder} />
        </div>
    )    
}

export default Checkout

