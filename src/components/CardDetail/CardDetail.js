import { useContext } from "react";
import style from "./CardDetail.module.css";
import Counter from "../Counter/Counter";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const CardDetail = ({ item }) => {
  const { addToCart, cart } = useContext(CartContext);

  const navigate = useNavigate();

  const onAdd = (cantidad) => {
    addToCart(item, cantidad);
    navigate("/cart");
  };

  return (
    <div className={style.detail}>
      <img src={item.img} alt={item.name} />
      <div className={style.info}>
        <h2>{item.name}</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem nulla
          voluptas consequuntur aut quia fugit cumque aperiam, corporis
          voluptate repudiandae ducimus qui, beatae architecto culpa dolore nemo
          illum, enim iste?
        </p>
        <div className={style.priceContainer}>
          <h3>$ {item.price}</h3>
          {item.stock === 0 ? (
            <h3>No hay stock</h3>
          ) : (
            <>
              {cart.some((prod) => prod.id === item.id) ? (
                <Counter
                  stock={
                    item.stock -
                    cart.find((prod) => prod.id === item.id).cantidad
                  }
                  initial={1}
                  addToCart={onAdd}
                />
              ) : (
                <Counter stock={item.stock} initial={1} addToCart={onAdd} />
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardDetail;
