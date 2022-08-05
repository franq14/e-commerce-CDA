import CardList from "../CardList/CardList";
import { FavContext } from "../../context/FavContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import style from "./Favs.module.css";

const Favs = () => {
  const { fav } = useContext(FavContext);

  const navigate = useNavigate();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {fav.length !== 0 ? (
        <>
          <h3 style={{ fontSize: "20px" }}>Favoritos</h3>
          <CardList items={fav} />
        </>
      ) : (
        <div className={style.favsContainerVoid}>
          <h1>Ups... Todavia no agregaste ningún producto a favoritos :(</h1>
          <button className={style.botonDelete} onClick={() => navigate("/")}>
            Agregar producto
          </button>
        </div>
      )}
    </div>
  );
};
export default Favs;
