import s from './Card.module.css';
import { useNavigate  } from 'react-router-dom';
import { FavContext } from '../../context/FavContext';
import { useContext } from 'react';

const Card = ({ prod }) => {
    const { addToFav, isInFav } = useContext(FavContext);

    const navigate = useNavigate()

    return (
        <div className={s.card}>
            <img src={prod.img} alt={prod.name} />
            <div className={s.info}>
                <h3 style={{textAlign: 'center'}}>{prod.name}</h3>
                <div style={{display: 'flex', justifyContent: 'space-around'}}>
                <h4>$ {prod.price}</h4>
                <button onClick={() => addToFav(prod)}>{isInFav(prod.id) ? 'Quitar de fav' : 'Agregar a fav'}</button>
                </div>
            </div>
            <button onClick={() => navigate(`/detail/${prod.id}`)}>Ver detalle</button>
        </div>
    );
};

export default Card;