import cart from './assets/cart.png'


const CartWidget = () => {
    return (
        <div>
            <img className="cart-icon" src={cart} alt="cart-widget"/>
            <span className="number-cart">0</span> 
        </div>
    )
}

export default CartWidget

