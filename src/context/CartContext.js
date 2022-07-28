import { createContext, useState } from 'react';

export const CartContext = createContext();

const CartProvider = (props) => {
    const [cart, setCart] = useState(localStorage.getItem('Cart') ? JSON.parse(localStorage.getItem('Cart')) : []);

    const addToCart = (item, cantidad) => {
        if (isInCart(item.id)) {
            addOne(item.id, cantidad);
        } else {
            localStorage.removeItem('Cart');
            localStorage.setItem('Cart', JSON.stringify([...cart, { ...item, cantidad }]))
            setCart([...cart, { ...item, cantidad }]);
        }
    };

    const isInCart = (id) => {
        return cart.some((prod) => prod.id === id);
    };

    const addOne = (id, cantidad) => {
        setCart( cart => {
            const newCart = cart.map( prod => {
                if(prod.id === id){
                    return {...prod, cantidad: cantidad ? prod.cantidad + cantidad : prod.cantidad++}
                }
                else {
                    return prod;
                }
            })
            localStorage.removeItem('Cart');
            localStorage.setItem('Cart', JSON.stringify(newCart))
            return newCart;
        })
    }

    const leaveOne = (id) => {
        setCart( cart => {
            const newCart = cart.map( prod => {
                if(prod.id === id){
                    return {...prod, cantidad: prod.cantidad--}
                }
                else {
                    return prod;
                }
            })
            localStorage.removeItem('Cart');
            localStorage.setItem('Cart', JSON.stringify(newCart))
            return newCart;
        })
    }

    const deleteOne = (id) => {
        const productosFiltrados = cart.filter((prod) => prod.id !== id);
        setCart(productosFiltrados);
    };

    const clearCart = () => {
        setCart([]);
        localStorage.removeItem('Cart');
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, addOne, leaveOne, clearCart, deleteOne }}>
            {props.children}
        </CartContext.Provider>
    );
};

export default CartProvider;