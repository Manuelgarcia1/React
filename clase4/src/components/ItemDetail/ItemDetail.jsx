import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
//import img from '../../images/img01.jpg'
import "./style.css"

export const ItemDetail = ({item}) => {
  return (
    <>
    <div className="product-details">
        <img src={item.img} width="300px" height="300px" alt="Imagen" />
        <h1>{item.name}</h1>
        <p>${item.price}</p>
        <p>{item.description}</p>
        <ItemCount stock={12} initial={1} />
        
    </div>
    </>
  )
}