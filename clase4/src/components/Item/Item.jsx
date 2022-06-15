import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import img from '../../images/img01.jpg'
import './style.css'

const Item = ({name, price}) => {
  return (
    <>
    <div className='contenedor'>
        <h1>{name}</h1>
        <img src={img} width="350px" height="350px" alt="Imagen" />
        <p>${price}</p>
    
        <ItemCount stock={12} initial={1} />

    </div>
    </>
  )
}

export default Item