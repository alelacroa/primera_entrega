import React, {useState } from 'react';


const ItemCount = ({stock}) => {
    const [count, setCount] = useState(0);
    console.log(stock)
    return (
        <>
        <h1 className={count > stock ? "positive" : null}>
        {count}
        </h1>
        <div className="title-waring">
        <h2 className={count < stock ? "ocultar" : null}>No hay mas stock!</h2>
        </div>
        <div className="button__wrapper">
        <button onClick={() => count !== 0 && setCount(count - 1)}>-</button>
        <button onClick={() => count !== stock && setCount(count + 1)}>+</button>
        </div>
        </>
)
}



export default ItemCount