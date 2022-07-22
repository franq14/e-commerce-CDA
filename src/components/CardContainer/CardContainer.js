import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CardList from '../CardList/CardList';

const CardContainer = () => {
    const [items, setItems] = useState([]);
    const { categoryId } = useParams();

    useEffect(() => {
        if (categoryId) {
            fetch(
                `https://fake-products-eric.herokuapp.com/api/products/category/${categoryId}`
            )
                .then((res) => res.json())
                .then((res) => setItems(res));
        } else {
            fetch('https://fake-products-eric.herokuapp.com/api/products')
                .then((res) => res.json())
                .then((res) => setItems(res));
        }
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