import Nav from '../Nav/Nav';
import './Footer.css'

const Footer = () => {
    const prueba = () => {
        console.log('Click on footer');
    };

    return (
        <div className='footerDiv'>
            <Nav isInHedaer={false} prueba={prueba} />
        </div>
    )
}

export default Footer;