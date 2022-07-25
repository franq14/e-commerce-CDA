import Card from '../Card/Card';
import style from './CardList.module.css'

const CardList = ({ items }) => {
    return (
        <div className={style.cardList}>
            {items.map((prod) => (
                <Card prod={prod} key={prod.id} />
            ))}
        </div>
    );
};

export default CardList;