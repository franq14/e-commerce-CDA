import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CardList from '../CardList/CardList';

const CardContainer = () => {
    const [items, setItems] = useState([]);
    const { categoryId } = useParams();

    useEffect(() => {
        const URL = "https://fake-products-eric.herokuapp.com/api/products";
        const peticion = categoryId ? `${URL}/category/${categoryId}` : URL;

        fetch(peticion)
            .then((res) => res.json())
            .then((res) => setItems(res))
            .catch((err) => console.log(err));

    }, [categoryId]);

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <h2>Artículos</h2>
            <CardList items={items} />
        </div>
    );
};

export default CardContainer;