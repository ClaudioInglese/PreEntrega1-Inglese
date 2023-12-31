import './Item.css';
import {Link} from "react-router-dom";

const Item = ({id, nombre, imagen, precio, stock}) => {

    return (        
        <div className='container'>
            <div className='card'>
                <header>
                    <h2 className='nombreArticulo'>{nombre}</h2>                
                </header>
                <picture>
                    <img src={imagen} alt={nombre} />                
                </picture>
                <section>
                    <p>Precio: ${precio}</p>
                    <p>Stock Disponible: {stock}</p>
                </section>
                <footer> 
                    <button className='botonfooter'><Link to={`/item/${id}`}>Ver Detalle</Link></button>
                </footer>
            </div>
        </div>
    )
}

export default Item;