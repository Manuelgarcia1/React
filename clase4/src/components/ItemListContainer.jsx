import ItemCount  from "./ItemCount/ItemCount.jsx"

export const ItemListContainer = ({title, description}) => {

    const styleItemListContainer = {
        fontSize: '40px',   
    }

    const onAdd = (quantity) => {
      alert (`compraste ${quantity} unidades`);
    }
  return (<>

    <h1 className="titleItem" style={styleItemListContainer}>{title}</h1>

    <p className="descriptionItem" style={styleItemListContainer}>{description}</p>

    <ItemCount initial={1} stock={5} onAdd={onAdd}/>
    </>
  )
}