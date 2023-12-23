import './Cart.css'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

const Cart = () =>{
    const { cart, clearCart, totalPrice, removeItem } = useContext(CartContext);



    return (
        
        <div className='cart-container'>
            { 
                cart.map((prod) => (
                    <div className='cart-prods' key={prod.id}>
                        <img className='prodimg' src={prod.imagen} alt='Imagen de Producto' />
                        <h3>{prod.nombre}</h3>
                        <h3>${prod.precio}</h3>
                        <h3>Cant: {prod.quantity}</h3>
                        <div className='cart-price'>
                        <h3>Total: ${prod.precio * prod.quantity}</h3>
                        </div>
                        
                        <button className='removeitem' onClick={() => removeItem(prod.id)}>Eliminar Producto</button>                                      
                    </div>
                    
                                                         
                    
                    
                ))                    
            }    

            {
                cart.length > 0 ?
                <div  className='button-container' >
                    <hr className='hr'></hr>
                    <h3 className='totalprice'>Total: ${totalPrice()}</h3>  
                    <button className='vaciar' onClick={() => clearCart()}>Vaciar Carrito</button> 
                    <button><Link to='/checkout' className='checkout'>Finalizar Compra</Link></button>        
                </div> :
                <div className='seguircomprando'>
                    <h2 className='nocartprods'>No hay productos en el carrito</h2> 
                    <button><Link to='/' className='seguir'>Seguir Comprando</Link></button>   
                </div>
                
                 
                
                
            }  
              
             
        </div>
    )
} 

export default Cart;