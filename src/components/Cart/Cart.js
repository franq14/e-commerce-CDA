import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import CartDetail from '../CartDetail/CartDetail';
import s from './Cart.module.css';

const Cart = () => {
    const { cart, clearCart, addOne, leaveOne, deleteOne, totalPrice } = useContext(CartContext);

    const navigate = useNavigate()

    if (cart.length === 0) {
        return (
            <div className={s.cartContainerVoid}>
                <h1>
                    Ups... Todavia no agregaste ningún producto al carrito :(
                </h1>
                <button className={s.addProdButton} onClick={() => navigate("/")}>Agregar producto</button>
            </div>
        );
    }
    return (
        <>
            <div className={s.cartContainer}>
                {cart.map((prod) => (
                    <CartDetail
                        key={prod.id}
                        prod={prod}
                        addOne={addOne}
                        leaveOne={leaveOne}
                        deleteOne={deleteOne}
                    />
                ))}
                <div>
                    <button className={s.vaciar} onClick={clearCart}>
                        Vaciar carrito
                    </button>
                    <h2>Total: ${totalPrice}</h2>
                </div>
            </div>
        </>
    );
};
export default Cart;