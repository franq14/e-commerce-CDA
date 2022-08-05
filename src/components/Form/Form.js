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
    console.log("response", response);
    setLoading(false);
    clearCart();
    navigate(`/checkout/${response.id}`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    order();
  };

  const handleChangeUser = (e) => {
    setUser(e.target.value);
  };
  const handleChangePhone = (e) => {
    setPhone(e.target.value);
  };

  return (
    <div>
      <form className={s.form} onSubmit={handleSubmit}>
        <input
          type="text"
          name="nombre"
          placeholder="Ingresa tu nombre"
          onChange={handleChangeUser}
          value={user}
        />
        <input
          type="text"
          name="telefono"
          placeholder="Ingresa tu telefono"
          onChange={handleChangePhone}
          value={phone}
        />
        <button>{loading ? "Enviando...." : " Enviar "}</button>
      </form>
    </div>
  );
};
export default Form;
