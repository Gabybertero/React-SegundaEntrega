import { useEffect, useState } from 'react'
import './ItemDetailContainer.css'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { doc, getDoc } from "firebase/firestore";
import { db } from '../../firebase/data';
import Error404 from '../Error/Error404';


const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)

    const { itemId } = useParams()

    useEffect(() => {
        setLoading(true)
        const docRef = doc(db, "productos", id)
        getDoc(docRef)
            .then(response => {
                const data = response.data()
                const productsAdapted = { id: response.id, ...data}
                setProduct(productsAdapted)
            })
            .catch(error => {
                console.error(Error404);
            })
            .finally(() => {
                setLoading(false)
            })

    }, [itemId])

    return(
        <div className="ItemDetailContainer">
            {item && <ItemDetail item={item} />}
        </div>
    )
}

export default ItemDetailContainer