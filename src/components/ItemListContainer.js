import { useEffect, useState } from 'react'
import {prod} from './prod'
import {ItemList} from './ItemList/ItemList'

const ItemListContainer = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        setTimeout(() => {
        const data = new Promise((resolve, reject) => {
            resolve(prod);
        });
        data.then((data) => {
            setItems(data);
        });
    },1)
    },[]);
    
    return( 
    <>
        <ItemList items={items}/>
    </>
    );
}



export default ItemListContainer;