import { Route, Routes } from "react-router-dom";
import CardContainer from "../CardContainer/CardContainer";
import Cart from "../Cart/Cart";
import DetailContainer from "../DetailContainer/DetailContainer";
import Favs from "../Favs/Favs";

const Main = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<CardContainer />} />
        <Route path="/category/:categoryId" element={<CardContainer />} />
        <Route path="/detail/:id" element={<DetailContainer />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/favs" element={<Favs />} />
      </Routes>
    </div>
  );
};

export default Main;
