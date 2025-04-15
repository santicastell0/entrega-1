import ItemCard from '../ItemCard/ItemCard'
import './ItemList.css'

const ItemList = ({ productos }) => {
  return (
    <div className="item-list d-flex flex-wrap justify-content-center">
      {productos.map(prod => (
        <ItemCard key={prod.id} producto={prod} />
      ))}
    </div>
  )
}

export default ItemList
