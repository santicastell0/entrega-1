import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../firebase/firebaseConfig';
import ItemList from "../ItemList/ItemList";

const ItemListContainer = ({ mostrarBanner = false }) => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoriaId } = useParams();

  useEffect(() => {
    setLoading(true);

    const productosRef = collection(db, 'productos');

    const q = categoriaId
      ? query(productosRef, where('categoria', '==', categoriaId))
      : productosRef;

    getDocs(q)
      .then((resp) => {
        const items = resp.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setProductos(items);
      })
      .catch(error => {
        console.error("Error al cargar productos:", error);
      })
      .finally(() => setLoading(false));
  }, [categoriaId]);

  return (
    <div>
      {mostrarBanner && (
        <img
          src="/Portada/banner.webp"
          alt="Portada VMC"
          className="banner-img"
          style={{ width: "100%", height: "auto" }}
        />
      )}

      {loading ? <p>Cargando productos...</p> : <ItemList productos={productos} />}
    </div>
  );
};

export default ItemListContainer;
