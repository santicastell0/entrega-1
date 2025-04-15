const ItemDetail = ({ nombre, descripcion, precio }) => {
    return (
      <div className="card">
        <div className="card-body">
          <h2>{nombre}</h2>
          <p>{descripcion}</p>
          <h4>${precio}</h4>
          <button className="btn btn-success">Agregar al carrito</button>
        </div>
      </div>
    )
  }
  
  export default ItemDetail
  