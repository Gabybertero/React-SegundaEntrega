import { useEffect, useState } from 'react';
import './ItemListContainer.css';
import { getProducts, getProductsByCategory } from '../../asyncMock';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from '../../firebase/data';
import Error404 from '../Error/Error404';

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    
    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)

        const collectionRef = categoryId
        ? query(collection(db,'products'), where('category','==', categoryId))
        : collection(db,'products')

        getDocs(collectionRef)
        .then(response => {
            const productsAdapted = response.docs.map (doc => {
                const data = doc.data()
                return { id: doc.id, ...data}
            })
            setProducts(productsAdapted)
        })
        .catch(error => {
            console.error(Error404);
        })
        .finally(() => {
            setLoading(false)
        })

    })

    return (
        <div>
            <h1>{greeting}</h1>
            <h2 className='subtitulo'>Nuestros pares destacados:</h2>
            <ItemList products={products}/>
        </div>
    );
};
export default ItemListContainer;
