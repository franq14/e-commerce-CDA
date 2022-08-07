import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import style from "./Checkout.module.css";

const Checkout = () => {
  const { idCompra } = useParams();

  const navigate = useNavigate();

  return (
    <div className={style.checkoutMessage}>
      <h1>
        Gracias por tu compra, este es tu código para que puedas seguir el
        envío: {idCompra}
      </h1>
      <button className={style.checkoutButton} onClick={() => navigate("/")}>
        Volver a la lista de productos
      </button>
    </div>
  );
};

export default Checkout;
