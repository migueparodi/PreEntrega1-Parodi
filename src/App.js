import Contactos from './components/Contactos';
import '../src/Main.css';
import NavigationBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';
import { CartProvider } from './context/CartContext';
import Carrito from './components/Carrito';
import Checkout from './components/Checkout'



const App = () => {

  return (
      <CartProvider>
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
            
            <Route path="/contactos" element={<Contactos />}/>
            <Route path="/carrito" element={<Carrito />}/>
            <Route path="/checkout" element={<Checkout />}/>
          </Routes>
        </div>
      </BrowserRouter>
      </CartProvider>
  );
};


export default App;