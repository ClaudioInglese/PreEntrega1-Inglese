import '../ItemDetail/ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount';


const ItemDetail = ({id, nombre, imagen, category, descripcion, precio, stock}) => {
    console.log("Props received:", { id, nombre, imagen, precio, stock });

    return (
        <article>
            <header>
                <h2>{nombre}</h2>                
            </header>
            <picture>
                <img src={imagen} alt={nombre} />                
            </picture>
            <section>
                <p><span>Categoria:</span> {category}</p>
                <p><span>Descripcion:</span> {descripcion}</p>
                <p><span>Precio:</span> ${precio}</p>
                <p><span>Stock Disponible:</span> {stock}</p>
            </section>
            <footer> 
                <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log('Cantidad Agregada', quantity)}/>
            </footer>
        </article>
    )
}

export default ItemDetail;