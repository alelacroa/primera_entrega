import './ItemDetail.css';
import  {Link}  from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount'


export default function ItemDetail({ id, title, pictureUrl, stock, price, categoryId }) {
    return (
        <div className="card">
            <h1 className="title-card" key={id}>{title}</h1>
            <img className="cardImg" src={pictureUrl} /> 
            <h2 className="title-secundario">Selecciona la cantidad que deseas comprar:</h2>
            <h2 className="title-stock">Stock disponible {stock}</h2>
            <h2 className="title-stock">Capacidad: 120gb</h2>  
            <h2 className="title-stock">Precio $ {price}</h2>
            
            <ItemCount  stock={stock}/>

            <div className="cart-container">
            <Link to="/">
            <button className="btn-back">Volver</button>
            </Link>
            <button className="btn-cart">Agregar al Carrito</button>
            </div>
            
        </div>
    )
}
