import { Route, Routes } from 'react-router-dom';
import NavBar from "./componentes/NavBar/NavBar";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer";
import Checkout from './pages/Checkout';
import Cart from './pages/Cart';
import Nosotros from './pages/Nosotros';
import Contacto from './pages/Contacto';
import ImportarProductos from './componentes/ImportarProductos';

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer mostrarBanner={true} />} />
        <Route path="/categoria/:categoriaId" element={<ItemListContainer mostrarBanner={false} />} />
        <Route path="/item/:itemId" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/importar" element={<ImportarProductos />} />
      </Routes>
    </div>
  );
}

export default App;
