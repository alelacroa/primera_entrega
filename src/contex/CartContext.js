import React from 'react';
import { useState } from 'react';

export const CartContext = React.createContext();

export const CartProvider = ({children}) =>{
    const [cart, setCart] = useState ([]);

    const addToCart = (detailProduct, count)=>{
        const detailProductExit = cart.find((item) => item.id === detailProduct.id);
        if (detailProductExit) {
            setCart (
                cart.map((item) => item.id === detailProduct.id
                ? {...detailProductExit, count : detailProductExit.count + count}: item))
        }else {
            setCart([...cart, {...detailProduct, count} ]);
        } 
    }
    
    console.log(setCart)

    const removeItem = (id) => {
            const newCart = cart.filter((item) => item.id !== id)
            setCart(newCart)
    }
    
    const calcularCantidad = () => {
        return cart.reduce((acc, item) => acc + item.count, 0 )
    }

    const calcularTotal = () => {
        return cart.reduce((acc, item) => acc + item.count * item.price, 0)
    }


    const vaciarCarrito = () => {
        setCart([])
    }

    const datas ={
        addToCart, 
        cart, 
        removeItem, 
        calcularCantidad, 
        calcularTotal, 
        vaciarCarrito
    }

    return <CartContext.Provider value={datas}>{children}</CartContext.Provider>
};