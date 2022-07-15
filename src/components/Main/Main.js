import style from './Main.module.css';
import Counter from '../Counter/Counter';
import { useState } from "react";

const Main = () => {
    const [stock, setStock] = useState(10);

    const addToCart = (count) => {
        console.log(count, " items added to cart");
    }

    return (
        <div className='bodyDiv'>
            <h3>
                Catalogo
            </h3>
            <div className={style.itemCatalogue}>
                <img src='logo192.png' alt='img'/>
                <Counter stock={stock} addToCart={addToCart}/>
            </div>
        </div>
    )
}

export default Main;