import Nav from '../Nav/Nav';
import style from './Header.module.css';

const Header = () => {
    const prueba = () => {
    };

    return (
        <header className={style.header}>
            <Nav isInHedaer={true} prueba={prueba} />
        </header>
    )
}

export default Header;