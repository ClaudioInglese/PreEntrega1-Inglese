import '../ItemDetail/ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';



const ItemDetail = ({id, nombre, imagen, category, descripcion, precio, stock}) => {
    
    const [quantityAdded, setQuantityAdded] = useState(0)

    const {addItem} = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        console.log('handleOnAdd ejecutado'); 
        setQuantityAdded(quantity)  

        const item = {id, nombre, imagen, category, descripcion, precio, stock}

        addItem(item, quantity)
        console.log('Item added:', item, 'Quantity:', quantity);
    }
    
    console.log(typeof stock);

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
                {
                    quantityAdded > 0 ? (
                        <button className='terminar'><Link to='/cart'>Terminar compra</Link></button>
                    ) : (
                        
                        
                        <ItemCount initial={1} stock={(stock)} onAdd={handleOnAdd} />
                        
                    )
                }                
            </footer>
        </article>
    )
}

export default ItemDetail;