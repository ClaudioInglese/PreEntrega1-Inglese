import {useState, useEffect} from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';

import {getDocs, collection, query, where} from 'firebase/firestore';
import {db} from '../../services/firebase/firebaseConfig'; 



const ItemListContainer = ({ greeting }) => {

    const [ products, setProducts] = useState([])
    const [ loading, setLoading] = useState(true)

    const {categoryId} = useParams();
    
        useEffect(() => {
            setLoading(true)

            const productosRef = categoryId
            ? query(collection(db, 'products'), where('category', '==', categoryId))
            : collection(db, 'products');

            
            getDocs(productosRef)
                .then((response) => {
                    setProducts(
                        response.docs.map((doc) => {
                            return {...doc.data(), id: doc.id}
                        })
                    )
                })
                .catch((error) => {
                    console.error('Error fetching data:', error);
                })
                .finally(() => {
                    setLoading(false);
                });

        }, [categoryId])

        if (loading) {
            return (
                <div>
                    <p className='loadingdetails'>Cargando...por favor espere</p>
                </div>
            )        
        } 
      
   
        return ( 
            <div>
                <h1 className="greeting">{greeting}</h1> 
                <section> 
                    <ItemList products={products} />  
                </section>        
            </div>
        )
}

export default ItemListContainer;
 