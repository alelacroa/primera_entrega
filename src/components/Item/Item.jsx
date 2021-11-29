import React from 'react';
import { Link } from 'react-router-dom';
import '../Item/Item.css'


export default function Item({ id, title, pictureUrl, btn, stock, products}) {
    return (
        <div className="card">
            <h1 className="title-card">{title}</h1>
            <img className="cardImg" src={pictureUrl} /> 
            <Link to={`/producto/${id}`}>
            <button className="btn-detail">{btn}</button>
            </Link>
            <h2 className="title-stock">{stock}</h2> 
        </div>
    )
}
