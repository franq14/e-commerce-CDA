import { useContext } from "react";
import s from "./Nav.module.css";
import carrito from "../../assets/whiteCart.png";
import cdaIcon from "../../assets/CDA.svg";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import whiteFilledHeart from "../../assets/whiteFilledHeart.svg";

const Nav = ({ isInHedaer }) => {
  const { cart, totalCantidad } = useContext(CartContext);

  const navigate = useNavigate();

  return (
    <>
      {isInHedaer ? (
        <nav className={s.nav}>
          <Link to="/">
            <img style={{ width: "140px" }} src={cdaIcon} alt="logo" />
          </Link>
          <ul style={{ gap: "15px" }}>
            <li>
              <Link className={s.textListDecoration} to={"/category/remeras"}>
                Remeras
              </Link>
            </li>
            <li>
              <Link className={s.textListDecoration} to={"/category/camisas"}>
                Camisas
              </Link>
            </li>
            <li>
              <Link className={s.textListDecoration} to={"/category/gorras"}>
                Gorras
              </Link>
            </li>
            <li>
              <Link className={s.textListDecoration} to={"/category/rinoneras"}>
                Riñoneras
              </Link>
            </li>
            <li>
              <Link
                className={s.textListDecoration}
                to={"/category/billeteras"}
              >
                Billeteras
              </Link>
            </li>
          </ul>
          <div style={{ display: "flex", gap: "40px" }}>
            <Link to="/favs">
              <img
                style={{
                  width: "60px",
                  height: "max-content",
                  alignContent: "center",
                }}
                src={whiteFilledHeart}
                alt="favsButton"
              />
            </Link>
            <div style={{ display: "flex" }}>
              {cart.length > 0 && (
                <h2 className={s.prodCount}>{totalCantidad}</h2>
              )}
              <img
                onClick={() => navigate("/cart")}
                style={{
                  width: "60px",
                  height: "max-content",
                  alignContent: "center",
                }}
                src={carrito}
                alt="logo"
              />
            </div>
          </div>
        </nav>
      ) : (
        <nav className={s.navFooter}>
          <ul style={{ gap: "20px" }}>
            <li>
              <a
                className={s.textListDecoration}
                href="https://www.instagram.com/cda_informatica/"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                className={s.textListDecoration}
                href="https://www.facebook.com/apasionadosIT"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                className={s.textListDecoration}
                href="https://www.linkedin.com/company/cda-informatica/mycompany/"
              >
                Linkedin
              </a>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
};

export default Nav;
