import React, {useState } from 'react';
import './ItemDetail.css';
import  {Link}  from 'react-router-dom';

export default function ItemDetail({ id, title, pictureUrl, stock, price, categoryId }) {
    const [count, setCount] = useState(1);
    return (
        <div className="card">
            <h1 className="title-card" key={id}>{title}</h1>
            <img className="cardImg" src={pictureUrl} /> 
            <h2 className="title-secundario">Selecciona la cantidad que deseas comprar:</h2>
            <h2 className="title-stock">{stock}</h2> 
            <h2 className="title-stock">Precio $ {price}</h2>
            
            <h1 className={count > 0 ? "positive" : null}>
            {count}
            </h1>
            <div className="title-waring">
            <h2 className={count < 10 ? "ocultar" : null}>No hay mas stock!</h2>
            </div>
            <div className="button__wrapper">
            <button disabled={count < 1} onClick={() => setCount(count - 1)}>-</button>
            <button disabled={count > 9} onClick={() => setCount(count + 1)}>+</button>
            </div>
            <div className="cart-container">
            <Link to="/">
            <button className="btn-back">Volver</button>
            </Link>
            <button className="btn-cart">Agregar al Carrito</button>
            </div>
            
        </div>
    )
}
