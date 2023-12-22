import './Cart.css'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
// import CartItem from '../CartItem/CartItem'
import { Link } from 'react-router-dom'

const Cart = () =>{
    const { cart, clearCart, totalPrice, removeItem } = useContext(CartContext);



    return (
        
        <div className='cart-container'>
            { 
                cart.map((prod) => (
                    <div key={prod.id}>
                        <img className='prodimg' src={prod.imagen} alt='Imagen de Producto' />
                        <h3>{prod.nombre}</h3>
                        <h3>${prod.precio}</h3>
                        <h3>Cant: {prod.quantity}</h3>
                        <h3>Total: ${prod.precio * prod.quantity}</h3>
                        <button className='removeitem' onClick={() => removeItem(prod.id)}>Eliminar Producto</button> 
                                     
                    </div>
                    
                                                         
                    
                    
                ))                    
            }    

            {
                cart.length > 0 ?
                <div>
                    <h3 className='totalprice'>Total: ${totalPrice()}</h3>  
                    <button className='vaciar' onClick={() => clearCart()}>Vaciar Carrito</button> 
                    <button className='vaciar'><Link to='/checkout' className='checkout'>Finalizar Compra</Link></button>        
                </div> :
                <h2 className='noprod'>No hay productos en el carrito</h2>              
            }  
              
             
        </div>
    )
} 

export default Cart;