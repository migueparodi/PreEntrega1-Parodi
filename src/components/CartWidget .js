import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css'; 

const CartWidget = () => {
  return (
    <div className="cart-widget">
      <FontAwesomeIcon icon={faShoppingCart} size="lg" className="cart-icon" />
      <span className="badge badge-pill badge-danger">3</span> {0}
    </div>
  );
}

export default CartWidget;