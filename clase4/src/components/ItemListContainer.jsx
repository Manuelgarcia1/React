
import { useState, useEffect } from "react";
import { products } from "../products"
import { ItemList } from "./ItemList/ItemList";

export const ItemListContainer = ({title, description}) => {
  
  const [productos, setProductos] = useState([])
  
  useEffect(() =>{
    const getProducts = new Promise((resolve, reject) =>{
        setTimeout(() =>{
          resolve(products);
        }, 2000);
      });
    getProducts.then((resolve) =>{
      setProductos(resolve);
    }).catch((error) => {
      console.log(error);
    });
  }, []);

    const styleItemListContainer = {
        fontSize: '40px',   
    }

  return (<>

    <h1 className="titleItem" style={styleItemListContainer}>{title}</h1>

    <p className="descriptionItem" style={styleItemListContainer}>{description}</p>
    
    <ItemList items={productos} />
    </>
  )
}