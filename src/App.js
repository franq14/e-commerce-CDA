import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import CartProvider from "./context/CartContext";
import FavProvider from "./context/FavContext";

function App() {
  return (
    <FavProvider>
      <CartProvider>
        <BrowserRouter>
          <div
            style={{
              height: "100vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Header />
            <Main />
            <Footer />
          </div>
        </BrowserRouter>
      </CartProvider>
    </FavProvider>
  );
}

export default App;
