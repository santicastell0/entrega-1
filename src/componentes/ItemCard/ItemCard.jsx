import { useNavigate } from 'react-router-dom'
import './ItemCard.css'

const ItemCard = ({ producto }) => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/item/${producto.id}`)
  }

  return (
    <div className="card-container" onClick={handleClick}>
      <div className="card-flip">
        <div className="card-front">
          <img src={producto.imagen} alt={producto.nombre} />
          <h5>{producto.nombre}</h5>
        </div>
        <div className="card-back">
          <p>{producto.descripcion}</p>
          <button className="btn btn-light">Ver Detalle</button>
        </div>
      </div>
    </div>
  )
}

export default ItemCard
