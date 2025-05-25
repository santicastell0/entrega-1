import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart, removeFromCart, clearCart, getTotal } = useCart();

  if (cart.length === 0) {
    return (
      <div>
        <h2>Carrito vacío</h2>
        <Link to="/">Volver a productos</Link>
      </div>
    );
  }

  return (
    <div>
      <h2>Carrito</h2>
      {cart.map((item) => (
        <div key={item.id}>
          <p>{item.name} - Cantidad: {item.quantity} - Precio: ${item.price * item.quantity}</p>
          <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
        </div>
      ))}
      <h3>Total: ${getTotal()}</h3>
      <button onClick={clearCart}>Vaciar carrito</button>
      <Link to="/checkout">Finalizar compra</Link>
    </div>
  );
};

export default Cart;
