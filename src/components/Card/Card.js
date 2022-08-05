import s from "./Card.module.css";
import { useNavigate } from "react-router-dom";
import { FavContext } from "../../context/FavContext";
import { useContext } from "react";
import filledHeart from "../../assets/filledHeart.svg";
import voidHeart from "../../assets/voidHeart.svg";

const Card = ({ prod }) => {
  const { addToFav, isInFav } = useContext(FavContext);

  const navigate = useNavigate();

  return (
    <div className={s.card}>
      <img className={s.prodImage} src={prod.img} alt={prod.name} />
      <div className={s.info}>
        <h3 style={{ textAlign: "center" }}>{prod.name}</h3>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <h4>$ {prod.price}</h4>
          <button className={s.heartButton} onClick={() => addToFav(prod)}>
            {isInFav(prod.id) ? (
              <img className={s.heartImage} src={filledHeart} />
            ) : (
              <img className={s.heartImage} src={voidHeart} />
            )}
          </button>
        </div>
      </div>
      <button
        className={s.detailButton}
        onClick={() => navigate(`/detail/${prod.id}`)}
      >
        Ver detalle
      </button>
    </div>
  );
};

export default Card;
