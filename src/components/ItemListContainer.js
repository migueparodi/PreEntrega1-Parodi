import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { pedirDatos } from './helpers/pedirdatos';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {

  const [productos, setProductos] = useState([]);
  const categoria = useParams().categoria;
  useEffect(() => {
    pedirDatos()
      .then((res) => {
        if (categoria){
          setProductos( res.filter((prod) => prod.categoria === categoria) );
        } else {
          setProductos(res);
        }
      })
  
  }, [categoria])
  
  return(
    <ItemList productos={productos} />
  );
}

export default ItemListContainer;