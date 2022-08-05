import { useState } from "react";
import { useNavigate } from "react-router-dom";
import s from "./Form.module.css";

const URL = "https://fake-products-eric.herokuapp.com/api/orders";

const Form = ({ cart, totalPrice, clearCart }) => {
  const [user, setUser] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const order = async () => {
    setLoading(true);
    const enviarInfo = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        cart,
        total: totalPrice,
        user,
        phone,
      }),
    });
    const response = await enviarInfo.json();
    setLoading(false);
    clearCart();
    navigate(`/checkout/${response.id}`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    order();
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <h2
        style={{
          color: "white",
          alignSelf: "center",
          borderBottom: "3px solid white",
          marginBottom: "0px",
          paddingBottom: "30px",
        }}
      >
        Finalizar compra
      </h2>
      <div>
        <div>
          <h3 style={{ color: "white", margin: "0" }}>Nombre del cliente</h3>
          <input
            type="text"
            name="nombre"
            placeholder="Ingresa tu nombre"
            onChange={(e) => setUser(e.target.value)}
            value={user}
          />
        </div>
        <div>
          <h3 style={{ color: "white", margin: "0" }}>Celular del cliente</h3>
          <input
            type="text"
            name="telefono"
            placeholder="Ingresa tu telefono"
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
          />
        </div>
        <button>{loading ? "Enviando...." : " Enviar "}</button>
      </div>
    </form>
  );
};
export default Form;
