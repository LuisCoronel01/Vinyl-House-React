import React from 'react'
import Item from './Item';
import "./itemList.css";

export const ItemList = ({items}) => {

return (
    <div className="item-list">
        {items.map((mapeado) => {
            return <Item key={mapeado.id} item={mapeado}/>            
        })}
        </div> 
);
}