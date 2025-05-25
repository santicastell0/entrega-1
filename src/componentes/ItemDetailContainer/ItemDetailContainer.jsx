import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase/firebaseConfig';
import './ItemDetailContainer.css';

const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);
  const [mostrarContacto, setMostrarContacto] = useState(false);


  const descripcionesPredeterminadas = {
    'Compresor a tornillo': 
      `El compresor a tornillo es un equipo esencial en aplicaciones industriales que requieren aire comprimido 
      de alta calidad y eficiencia. Está diseñado para ofrecer un funcionamiento continuo y fiable, 
      con bajo nivel de ruido y consumo energético optimizado. Ideal para procesos de manufactura, refrigeración y sistemas neumáticos.`,
    
    'Aeroenfriador de flujo vertical.': 
      `Este aeroenfriador de flujo vertical está fabricado con materiales resistentes a la corrosión, 
      lo que lo hace especialmente adecuado para la industria del gas y petróleo. Proporciona un intercambio térmico eficiente, 
      maximizando la transferencia de calor para mantener la estabilidad de los procesos y prolongar la vida útil del sistema.`,
    
    'Tigombu': 
      `El sistema Tigombu está diseñado para el tratamiento avanzado de biogás, ofreciendo una solución sostenible 
      para el manejo de residuos orgánicos. Su tecnología innovadora permite optimizar la producción de energía renovable 
      y reducir el impacto ambiental mediante procesos controlados y seguros.`,
    
    'Enfriador evaporativo': 
      `El enfriador evaporativo es un sistema eficiente para reducir la temperatura en ambientes industriales y comerciales. 
      Utiliza el principio de evaporación para ofrecer un enfriamiento natural, contribuyendo a un ahorro energético significativo 
      y a un ambiente más fresco y saludable.`,
    
    'Turbina de gas': 
      `Las turbinas de gas son equipos de generación de energía que convierten la energía química del combustible en energía mecánica. 
      Son ampliamente utilizadas en plantas de generación eléctrica y procesos industriales que requieren gran potencia y eficiencia. 
      Su diseño robusto asegura un rendimiento óptimo bajo condiciones exigentes.`,
    
    'Intercambiador de calor': 
      `El intercambiador de calor es un componente crítico en sistemas térmicos, permitiendo la transferencia eficiente 
      de calor entre dos fluidos sin que se mezclen. Su aplicación es vital en procesos industriales, HVAC y plantas de energía.`,
    
  };

  useEffect(() => {
    const obtenerProducto = async () => {
      setLoading(true);
      try {
        const docRef = doc(db, 'productos', itemId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setProducto(docSnap.data());
        } else {
          setProducto(null);
        }
      } catch (error) {
        console.error('Error al obtener producto:', error);
        setProducto(null);
      } finally {
        setLoading(false);
      }
    };

    obtenerProducto();
  }, [itemId]);

  if (loading) {
    return <p>Cargando producto...</p>;
  }

  if (!producto) {
    return <p>Producto no encontrado.</p>;
  }

  const descripcionMostrar = producto.descripcion || descripcionesPredeterminadas[producto.nombre] || 'Descripción no disponible.';

  return (
    <div className="item-detail-container">
      
      <div className="item-detail-image">
        <img
          src={producto.imagen}
          alt={producto.nombre}
        />
      </div>

      <div className="item-detail-info">
        <h2>{producto.nombre}</h2>
        <p className="description">{descripcionMostrar}</p>
        <p className="detail"><strong>Categoría:</strong> {producto.categoria}</p>

        <button 
          className="btn-contact"
          onClick={() => setMostrarContacto(!mostrarContacto)}
        >
          {mostrarContacto ? 'Ocultar contacto' : 'Contactar con vendedor'}
        </button>

        {mostrarContacto && (
          <div className="contact-info">
            <p><strong>Nombre:</strong> Juan Pérez</p>
            <p><strong>Área:</strong> Ventas y soporte técnico</p>
            <p><strong>Email:</strong> <a href="mailto:juan.perez@vmc.com.ar">juan.perez@vmc.com.ar</a></p>
            <p>
              <strong>WhatsApp:</strong>{' '}
              <a href="https://wa.me/5491123456789" target="_blank" rel="noopener noreferrer">
                +54 9 11 2345 6789
              </a>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ItemDetailContainer;
