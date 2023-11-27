import {Link} from "react-router-dom";

const Item = ({id, nombre, imagen, precio, stock}) => {

    return (
        <article>
            <header>
                <h2>{nombre}</h2>                
            </header>
            <picture>
                <img src={imagen} alt={nombre} />                
            </picture>
            <section>
                <p>Precio: ${precio}</p>
                <p>Stock Disponible: ${stock}</p>
            </section>
            <footer> 
                <button><Link to={`/item/${id}`}>Ver detalle</Link></button>
            </footer>
        </article>
    )
}

export default Item;