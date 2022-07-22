import Card from '../Card/Card';

const CardList = ({ items }) => {
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', width: '80%' }}>
            {items.map((prod) => (
                <Card prod={prod} key={prod.id} />
            ))}
        </div>
    );
};

export default CardList;