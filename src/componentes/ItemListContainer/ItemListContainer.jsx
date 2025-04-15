import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductos } from '../../mockProductos'
import ItemList from '../ItemList/ItemList'
import './ItemListContainer.css'

export const ItemListContainer = () => {
  const [productos, setProductos] = useState([])
  const { categoriaId } = useParams()

  useEffect(() => {
    getProductos().then(data => {
      if (categoriaId) {
        setProductos(data.filter(p => p.categoria === categoriaId))
      } else {
        setProductos(data)
      }
    })
  }, [categoriaId])

  return (
    <div className="container-fluid p-0">
      {!categoriaId && (
        <div className="banner-container">
          <img
            src="/Portada/banner.webp"
            alt="Imagen de portada"
            className="banner-img"
          />
          <div className="banner-overlay">
            <h1>Bienvenido a VMC Refrigeración</h1>
          </div>
        </div>
      )}

      <div className="container mt-4">
        <ItemList productos={productos} />
      </div>
    </div>
  )
}
