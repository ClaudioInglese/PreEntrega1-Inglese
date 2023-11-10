import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {

    return (
        <nav>
            <h3>PowerHard Computacion</h3>import React from "react";
            <div>
                <button>Productos</button> 
                <button>Nosotros</button>  
                <button>Contacto</button>                                           
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar
