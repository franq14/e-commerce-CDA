import { createContext, useCallback, useEffect, useState } from 'react';

export const CartContext = createContext();

const CartProvider = (props) => {
    const [cart, setCart] = useState(localStorage.getItem('Cart') ? JSON.parse(localStorage.getItem('Cart')) : []);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalCantidad, setTotalCantidad] = useState(0);

    useEffect(() => {
        totalPriceSetter();
        totalCantidadSetter();
        localStorage.setItem('Cart', JSON.stringify(cart));
    }, [cart])

    const addToCart = (item, cantidad) => {
        if (isInCart(item.id)) {
            addOne(item.id, cantidad);
        } else {
            setCart([...cart, { ...item, cantidad }]);
        }
    };

    const isInCart = (id) => {
        return cart.some((prod) => prod.id === id);
    };

    const addOne = (id, cantidad) => {
        console.log(cart.map((prod) =>
        prod.id === id
            ? {
                  ...prod,
                  cantidad: cantidad ? prod.cantidad + cantidad : prod.cantidad++,
              }
            : prod
        ))

        setCart(cart.map((prod) =>
        prod.id === id
            ? {
                  ...prod,
                  cantidad: cantidad ? prod.cantidad + cantidad : prod.cantidad++,
              }
            : prod
    ))
    }
    

    const leaveOne = (id) => {
        setCart( cart.map((prod) =>
        prod.id === id
            ? { ...prod, cantidad: prod.cantidad - 1 }
            : prod
        ))
    }

    const deleteOne = (id) => {
        setCart(cart.filter((prod) => prod.id !== id));
    };

    const totalPriceSetter = () => {
        let count = 0;
        [...cart].forEach(prod => 
            count += prod.price * prod.cantidad
        )
        setTotalPrice(count);
    }

    const totalCantidadSetter = () => {
        let count = 0;
        [...cart].forEach(prod => 
            count += prod.cantidad
        )
        setTotalCantidad(count);
    }

    const clearCart = () => {
        setCart([]);
        localStorage.removeItem('Cart');
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, addOne, leaveOne, totalPrice, totalCantidad, clearCart, deleteOne }}>
            {props.children}
        </CartContext.Provider>
    );
};

export default CartProvider;