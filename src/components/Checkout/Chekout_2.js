// import { useContext } from "react";
// import { CartContext } from "../../context/CartContext";
// import { useState } from "react";

// import {addDoc, collection, documentId, getDocs, query, where } from "firebase/firestore";

// import { db } from "../../services/firebase/firebaseConfig";
// import CheckoutForm from "../CheckoutForm/CheckoutForm";
// import { Timestamp, writeBatch } from "firebase/firestore";

 
 
 


// const Checkout = () => {
//     const [loading, setLoading] = useState(false)

//     const [orderId, setOrderId] = useState('')

//     const { cart, totalPrice, clearCart } = useContext(CartContext)

//     const createOrder = async ({name, phone, email}) => {    
//         console.log('onSubmit a function:', typeof onSubmit === 'function'); 
          
//         setLoading(true) 

//         try{
//             const ObjOrder = {
                
//                 buyer: {
//                     name, phone, email                    
//                 },                
//                 items: cart,
//                 total: totalPrice(),
//                 date: Timestamp.fromDate(new Date())                
//             }
            

//             const batch = writeBatch(db)

//             const OutOfStock = []

//             const ids = cart.map(prod => prod.id)

//             const productsRef = collection(db, 'products')

//             const orderRef = collection(db, 'orders')

//             addDoc(orderRef, ObjOrder) 
//                 .then ((doc) => {
//                     console.log(doc.id);
//                 })

//             const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId), 'in', ids ))

//             const { docs } = productsAddedFromFirestore

//             // docs.forEach(doc => {
//             //     const dataDoc = doc.data()
//             //     const stockDb = dataDoc.stock

//             //     const productAddedToCart = cart.find(prod => prod.id === doc.id)
//             //     const prodQuantity = productAddedToCart?.quantity

//             //     if(stockDb >= prodQuantity) {
//             //         batch.update(doc.ref, { stock: stockDb - prodQuantity })                
//             //     } else{
//             //         OutOfStock.push({ id: doc.id, ...dataDoc})
//             //     }
//             // })
            
            
//             // if(OutOfStock.length === 0) {
//             //     await batch.commit()

                
//             //     const orderAdded = await addDoc(orderRef, ObjOrder) 

//             //     setOrderId(orderAdded.id)
//             //     clearCart()
//             // } else {
//             //     console.error('Hay productos que estan fuera de stock')
//             // } 


//         } catch (error) {
//             console.log(error)
//         } finally {
//             setLoading(false)           
//         }
//         console.log('Orden creada con:', { name, phone, email, cart}, 'precio: $', totalPrice() );
        
//     }

         
//     if(loading) {
//         return (
//             <div>
//                 <h1> Se está generando su orden</h1>
//             </div>
           
//         )
//     }

//     if(orderId) {
//         return (
//             <div>
//                 <h1>Muchas gracias por su compra</h1>
//                 <h2>El Id de su orden es: {orderId}</h2>
//             </div>
            
//         )
//     }
    
    

//     return (
//         <div>
//             <h1>Finalizar</h1>
//             <CheckoutForm onSubmit={createOrder} />
//         </div>
//     )    
// }

// export default Checkout

