import { useState } from "react";
import style from './Counter.module.css';

const Counter = ({stock, addToCart}) => {
    const [count, setCount] = useState(0);

    return (
        <div className={style.counter}>
            <div className={style.upperCount}>
                <button className={style.button} onClick={() => (count > 0 && setCount(count - 1))}>-</button>
                <h3 className={style.text}>
                    {count}
                </h3>
                <button className={style.button} onClick={() => (count < stock && setCount(count + 1))}>+</button>
            </div>
            <button className={style.button} onClick={() => addToCart(count)}>
                Add to cart
            </button>
        </div>
    )
}

export default Counter;