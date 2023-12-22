import './ItemDetailContainer.css';
import {useState, useEffect} from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';

import { getDoc, doc } from 'firebase/firestore';
import { db } from '../../services/firebase/firebaseConfig'; 


const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    

    const {ItemId} = useParams();
        

    useEffect(() => {
        console.log('Comenzando la carga...');
        
        setLoading(true)
        

        const docRef = doc(db, 'products', ItemId)
        console.log('docRef:', docRef);
        console.log('ItemId:', ItemId);

        getDoc(docRef)
           
            .then(response => {
                console.log('Datos recibidos:', response.data());
                const data = response.data()
                console.log('Data from Firebase:', data);
                
                const productAdapted = {id: response.id, ...data}
                setProduct(productAdapted)
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [ItemId])       
    
    if (loading) {
        return (
            <div>
                <p className='loadingdetails'>Cargando...por favor espere</p>
            </div>
        )        
    }       

    

    return (
        <div className='ItemDetailContainer'>
            <div className='ItemDetails'>
                <ItemDetail {...product} />
            </div>            
        </div>        
    )
}

export default ItemDetailContainer;

