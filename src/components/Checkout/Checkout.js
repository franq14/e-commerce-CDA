import React from "react";
import { useParams } from "react-router-dom";

const Checkout = () => {
  const { idCompra } = useParams();

  return (
    <div>
      Gracias por tu compra, este es tu código para que puedas seguir el envío:{" "}
      {idCompra}
    </div>
  );
};

export default Checkout;
