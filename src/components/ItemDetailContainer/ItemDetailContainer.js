import './ItemDetailContainer.css';
import {useState, useEffect} from 'react';
import { getProductById } from '../../asyncMock';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';


const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);

        const {ItemId} = useParams();
        console.log(ItemId);

    useEffect(() => {
        getProductById(parseInt(ItemId).toString())
            .then(response => {
                setProduct(response);
            })
            .catch(error => {
                console.error(error)
            })
        },   [ItemId]);
           

    return (
        <div className='ItemDetailContainer'>
            <div className='ItemDetails'>
                <ItemDetail {...product} />
            </div>
        </div>
    )

}

export default ItemDetailContainer;

