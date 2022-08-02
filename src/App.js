import {BrowserRouter} from 'react-router-dom';
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import CartProvider from './context/CartContext';
import FavProvider from './context/FavContext';

function App() {
  return (
    <FavProvider>
      <CartProvider>
        <BrowserRouter>
          <Header/>
          <Main/>
          <Footer/>
        </BrowserRouter>
      </CartProvider>
    </FavProvider>
  );
}

export default App;
