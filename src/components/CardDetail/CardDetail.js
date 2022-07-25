import style from './CardDetail.module.css';
import Counter from '../Counter/Counter';

const CardDetail = ({ item }) => {
    const onAdd = () => {
    };
    
    return (
        <div className={style.detail}>
            <img src={item.img} alt={item.name} />
            <div className={style.info}>
                <h2>{item.name}</h2>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Quidem nulla voluptas consequuntur aut quia fugit cumque
                    aperiam, corporis voluptate repudiandae ducimus qui, beatae
                    architecto culpa dolore nemo illum, enim iste?
                </p>
                <div className={style.priceContainer}>
                    <h3>$ {item.price}</h3>
                    <Counter stock={item.stock} initial={1} addToCart={onAdd} />
                </div>
            </div>
        </div>
    );
};

export default CardDetail;