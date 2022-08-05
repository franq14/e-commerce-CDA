import CardList from "../CardList/CardList";
import { FavContext } from "../../context/FavContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import style from "./Favs.module.css";

const Favs = () => {
  const { fav } = useContext(FavContext);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h3>Favoritos</h3>
      {fav.length !== 0 ? (
        <CardList items={fav} />
      ) : (
        <Link className={style.botonDelete} to="/">
          Ver lista de productos ;)
        </Link>
      )}
    </div>
  );
};
export default Favs;
