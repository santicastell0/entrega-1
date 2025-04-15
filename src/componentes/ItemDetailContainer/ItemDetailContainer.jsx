import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from '../../data/asyncMock'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState(null)
  const { itemId } = useParams()

  useEffect(() => {
    getProductById(itemId).then(res => setProducto(res))
  }, [itemId])

  return (
    <div className="container mt-4">
      {producto ? <ItemDetail {...producto} /> : <p>Cargando producto...</p>}
    </div>
  )
}

export default ItemDetailContainer
