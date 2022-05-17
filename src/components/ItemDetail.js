import React from 'react'

const ItemDetail = ({item}) => {
const {name } = item;
    return (
        <div>{name}</div>
    )

}

export default ItemDetail