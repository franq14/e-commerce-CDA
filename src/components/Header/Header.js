import Nav from '../Nav/Nav';
import style from './Header.module.css';

const Header = () => {
    return (
        <header className={style.header}>
            <Nav isInHedaer={true}/>
        </header>
    )
}

export default Header;