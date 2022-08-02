import CardList from '../CardList/CardList';
import { FavContext } from '../../context/FavContext';
import { useContext } from 'react';

const Favs = () => {

    const { fav } = useContext(FavContext);
    
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
        }}>
            <h3>Favoritos</h3>
            <CardList items={fav}/>
        </div>
    );
};
export default Favs;