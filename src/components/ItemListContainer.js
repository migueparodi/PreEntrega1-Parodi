import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="item-list-container text-center py-4">
      <p className='h4'>{greeting}</p>
    </div>
  );
}

export default ItemListContainer;