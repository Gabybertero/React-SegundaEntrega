import './ItemList.css'
import Item from '../Item/Item'
import { db } from '../../firebase/data';
import { useState } from 'react';

const ItemList = () => {
    const [products, setProducts] = useState([])
    return(
        <div className="CardContainer">
            {products.map(prod => <Item key={prod.id} {...prod} />)}
        </div>
    )
}

export default ItemList