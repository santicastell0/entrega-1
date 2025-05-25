import { Link } from 'react-router-dom';

const Item = ({ id, nombre, precio, imagen }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card">
        <img src={imagen} alt={nombre} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{nombre}</h5>
          <p className="card-text">Precio: ${precio}</p>
          <Link to={`/item/${id}`} className="btn btn-primary">Ver detalle</Link>
        </div>
      </div>
    </div>
  );
};

export default Item;
