import { useState } from 'react';

const ItemDetail = ({ producto }) => {
  const [mostrarContacto, setMostrarContacto] = useState(false);

  const vendedor = {
    nombre: 'Juan Pérez',
    email: 'juan.perez@vmc.com.ar',
    telefono: '+54 9 11 1234-5678',
  };

  return (
    <div style={{ display: 'flex', gap: '20px', padding: '20px' }}>
      {/* Detalles a la izquierda */}
      <div style={{ flex: 1 }}>
        <h2>{producto.nombre}</h2>
        <p>{producto.descripcion}</p>
        <p><strong>Categoría:</strong> {producto.categoria}</p>
        <p><strong>Precio:</strong> ${producto.precio || 'Consultar'}</p>

        <button onClick={() => setMostrarContacto(!mostrarContacto)} className="btn btn-primary">
          {mostrarContacto ? 'Ocultar contacto' : 'Contactar con vendedor'}
        </button>

        {mostrarContacto && (
          <div style={{ marginTop: '15px', border: '1px solid #ccc', padding: '10px', borderRadius: '5px' }}>
            <h5>Información de contacto:</h5>
            <p><strong>Nombre:</strong> {vendedor.nombre}</p>
            <p><strong>Email:</strong> <a href={`mailto:${vendedor.email}`}>{vendedor.email}</a></p>
            <p><strong>Teléfono:</strong> <a href={`tel:${vendedor.telefono}`}>{vendedor.telefono}</a></p>
          </div>
        )}
      </div>

      {/* Imagen a la derecha */}
      <div style={{ flex: 1 }}>
        <img
          src={producto.imagen}
          alt={producto.nombre}
          style={{ maxWidth: '100%', borderRadius: '8px' }}
        />
      </div>
    </div>
  );
};

export default ItemDetail;
