import React from "react";
import s from "./CartDetail.module.css";

const CartDetail = ({ prod, addOne, leaveOne, deleteOne }) => {
  return (
    <div className={s.containerCartDetail}>
      <div className={s.infoCartDetail}>
        <img src={prod.img} alt={prod.name} />
        <article>
          <h3>{prod.name}</h3>
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
            <h4> * $ {prod.price}</h4>
            <h4>= ${prod.price * prod.cantidad}</h4>
          </div>
        </article>
        <button className={s.botonDelete} onClick={() => deleteOne(prod.id)}>
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default CartDetail;
