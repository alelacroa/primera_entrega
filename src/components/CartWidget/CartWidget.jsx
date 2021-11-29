import React from 'react';
import carrito from '../../images/carrito.png';
import './CartWidget.css';

const CartWidget = () => {
    return (
        <img className="Carrito" src={carrito} alt="" />
    )
}

export default CartWidget
