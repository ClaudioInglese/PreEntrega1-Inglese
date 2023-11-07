import CartWidget from "./CartWidget/CartWidget"

const NavBar = () => {

    return (
        <nav>
            <h3>Ecommerce (aca va la imagen) </h3>
            <div>
                <button>Celulares</button>  
                <button>Tablets</button> 
                <button>Notebooks</button>                             
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar