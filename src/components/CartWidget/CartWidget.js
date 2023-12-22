import './CartWidget.css'
import { useContext } from 'react'
import cart from './assets/cart.png'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'


const CartWidget = () => {
    const {totalQuantity} = useContext(CartContext)

    return (
       
        <Link to='/cart' >
            <img className="cart-icon" src={cart} alt="cart-widget"/>
            <span className="number-cart"> {totalQuantity()}</span>            
            
        </Link>
       
    )
}

export default CartWidget

