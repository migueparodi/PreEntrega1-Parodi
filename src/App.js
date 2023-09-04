import React from 'react';
import '../src/Main.css';
import NavigationBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';



const App = () => {
  return (
    <BrowserRouter>
      <div>
        <NavigationBar />
        <Routes>
          <Route
            path="/"
            element={<ItemListContainer />}
          />
          <Route
            path="/item/:id"
            element={
                <ItemDetailContainer />
            }
          />

          <Route 
            path="/:categoria" 
            element={<ItemListContainer />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};


export default App;