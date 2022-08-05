import { Route, Routes } from "react-router-dom";
import CardContainer from "../CardContainer/CardContainer";
import Cart from "../Cart/Cart";
import DetailContainer from "../DetailContainer/DetailContainer";
import Favs from "../Favs/Favs";
import Checkout from "../Checkout/Checkout";

const Main = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<CardContainer />} />
        <Route path="/category/:categoryId" element={<CardContainer />} />
        <Route path="/detail/:id" element={<DetailContainer />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/favs" element={<Favs />} />
        <Route path="/checkout/:idCompra" element={<Checkout />} />
      </Routes>
    </div>
  );
};

export default Main;
