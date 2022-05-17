import React from 'react'
import { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail';


const GetItem = () => {

    useEffect(() => {
        setTimeout(() => {
        const data = new Promise((resolve, reject) => {
            resolve(data);
        });
    },1)
    },[]);
}

    function ItemDetailContainer () {
        const [item, setItem] = useState({});
        useEffect(() => {
                GetItem('https://pokeapi.co/api/v2/pokemon/pikachu')
                .then((res) => res.json())
                .then((res) => setItem(res.results))
        },[]);


        return( 
            <div>
                <ItemDetail item={item}></ItemDetail>
            </div>
            );
        
    }
    


export default ItemDetailContainer