import React from 'react';
import NavigationBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

const App = () => {
  return (
    <div>
      <NavigationBar />
      <ItemListContainer greeting="¡Bienvenido a NatúYe, donde encontraras cosmética natural!" />
    </div>
  );
};

export default App;
