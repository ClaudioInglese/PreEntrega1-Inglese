import { CartContext } from "../../context/CartContext";
import React from "react";
import { useContext } from "react";
import "./CartItem.css";



const CartItem = ({products})=> {

    const { removeItems } = useContext(CartContext);
    
    if (!products) {
        return null;
    }

    
    return (
        <div>
            <picture>
                <img src={products.imagen} alt={products.nombre}/>
            </picture>
            <div>
                <h2>{products.nombre}</h2>
                <p>Cantidad: {products.quantity}</p>
                <p>Subtotal:{products.quantity * products.precio}</p>
                <button onClick={()=> removeItems(products.id)}>Eliminar</button>
            </div>
        </div>
    )
}

export default CartItem;