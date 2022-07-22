import s from './Card.module.css';
import { useNavigate  } from 'react-router-dom';

const Card = ({ prod }) => {

    const navigate = useNavigate()

    return (
        <div onClick={() => navigate(`/detail/${prod.id}`)} className={s.card}>
            <img src={prod.img} alt={prod.name} />
            <div className={s.info}>
                <h3>{prod.name}</h3>
                <h4>$ {prod.price}</h4>
            </div>
        </div>
    );
};

export default Card;