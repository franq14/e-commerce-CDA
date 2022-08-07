import React from "react";
import s from "./CartDetail.module.css";
import trashCan from "../../assets/trashCan.svg";
import blackArrow from "../../assets/blackArrow.svg";
import { Link } from "react-router-dom";

const CartDetail = ({ prod, addOne, leaveOne, deleteOne }) => {
  return (
    <div className={s.containerCartDetail}>
      <div className={s.infoCartDetail}>
        <div
          style={{
            display: "flex",
            borderRadius: "10px",
          }}
        >
          <img src={prod.img} alt={prod.name} />
          <article
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
              padding: "0px 20px",
            }}
          >
            <h3 style={{ alignSelf: "start" }}>{prod.name}</h3>
            <div className={s.subtotal}>
              <button
                className={s.boton}
                disabled={prod.cantidad === 1}
                onClick={() => leaveOne(prod.id)}
              >
                -
              </button>
              <h4>{prod.cantidad} </h4>
              <button
                className={s.boton}
                disabled={prod.cantidad === prod.stock}
                onClick={() => addOne(prod.id)}
              >
                +
              </button>
              <h4> $ {prod.price}</h4>
              <h4>= ${prod.price * prod.cantidad}</h4>
            </div>
          </article>
          <Link style={{ alignSelf: "center" }} to={`/detail/${prod.id}`}>
            <img
              style={{ height: "60px" }}
              src={blackArrow}
              alt="go to article"
            />
          </Link>
        </div>
        <button className={s.botonDelete} onClick={() => deleteOne(prod.id)}>
          <img src={trashCan} alt="Delete" />
        </button>
      </div>
    </div>
  );
};

export default CartDetail;
