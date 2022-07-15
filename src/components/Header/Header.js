import Nav from '../Nav/Nav';
import style from './Header.module.css';

const Header = () => {
    const prueba = () => {
        console.log('Click on header');
    };

    return (
        <div className={style.header}>
            <Nav isInHedaer={true} prueba={prueba} />
        </div>
    )
}

export default Header;