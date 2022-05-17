import React from 'react'
import ItemCount from '../ItemCount';
import "./Item.css";

const Item = ({item}) => {
    const {nombre,imagen,precio,stock,initial,state } = item;
return (
    <div className="item">
        <div className="card" style={{ width: '18rem' }}>
        <img src={imagen} className="card-img-top" alt={nombre}/>
        <div className="card-body">
            <h5 className="card-title">{nombre}</h5>
        <p className="card-text">Precio: {precio} $</p>
        <h2>{state}</h2>
            </div>
        <ItemCount stock={stock} initial={initial}></ItemCount>
        <button type="button" className="btn btn-primary">Informacion</button>
        </div>
    </div>
);
}

export default Item;