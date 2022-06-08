export const ItemListContainer = ({title, description}) => {

    const styleItemListContainer = {
        fontSize: '40px',   
    }
  return (<>

    <h1 className="titleItem" style={styleItemListContainer}>{title}</h1>

    <p className="descriptionItem" style={styleItemListContainer}>{description}</p>

    </>
  )
}