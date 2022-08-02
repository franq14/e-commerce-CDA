import { useContext } from 'react';
import s from './Nav.module.css';
import carrito from '../../assets/whiteCart.png';
import cdaIcon from '../../assets/CDAIcon.jpg';
import { Link, useNavigate  } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

const Nav = ({ isInHedaer }) => {
    const { cart, totalCantidad } = useContext(CartContext);

    const navigate = useNavigate()

    const handleClick = (arg) => {
        switch (arg) {
            case 'Remeras':
                navigate("/category/remeras");
                break;
            case 'Camisas':
                navigate("/category/camisas");
                break;
            case 'Gorras':
                navigate("/category/gorras");
                break;
            case 'Instagram':
                window.location.href = 'https://www.instagram.com/cda_informatica/';
                break;
            case 'Facebok':
                window.location.href = 'https://www.facebook.com/apasionadosIT';
                break;
            case 'Linkedin':
                window.location.href = 'https://www.linkedin.com/company/cda-informatica/mycompany/';
                break;
            case carrito:
                navigate("/cart");
                break;
            case 'logo192.png':
                window.location.href = 'https://reactjs.org/';
                break;
        }
    }

    return (
        <nav className={isInHedaer ? s.nav : s.navFooter}>
            <Link to="/">
                <img src={cdaIcon} alt="logo"/>
            </Link>
            <ul>
                <li onClick={() => handleClick(isInHedaer ? 'Remeras' : 'Instagram')}>{isInHedaer ? 'Remeras' : 'Instagram'}</li>
                <li onClick={() => handleClick(isInHedaer ? 'Camisas' : 'Facebok')}>{isInHedaer ? 'Camisas' : 'Facebok'}</li>
                <li onClick={() => handleClick(isInHedaer ? 'Gorras' : 'Linkedin')}>{isInHedaer ? 'Gorras' : 'Linkedin'}</li>
            </ul>
            <Link to="/favs">
                <h2>FAVS</h2>
            </Link>
            <div style={{display: 'flex'}}>
                {isInHedaer && cart.length > 0 && <h2 className={s.prodCount}>{totalCantidad}</h2>}
                <img onClick={() => handleClick(isInHedaer ? carrito : 'logo192.png')} src={isInHedaer ? carrito : 'logo192.png'} alt="logo" />
            </div>
        </nav>
    );
};

export default Nav;