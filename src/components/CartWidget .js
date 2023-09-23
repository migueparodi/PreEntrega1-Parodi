import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {

  const { cantidadEnCarrito } = useContext(CartContext);

  return (
    <div>
        <Link className="menu-link" to="/carrito">
        🛒 
            <span className="numerito">{cantidadEnCarrito()}</span>
        </Link>
    </div>
  );
}

export default CartWidget;