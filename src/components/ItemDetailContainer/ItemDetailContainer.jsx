import React, {useState, useEffect, useContext } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import data from '../Item/items';
import './ItemDetailContainer.css';
import  {useParams}  from 'react-router-dom';
import { CartContext } from '../../contex/CartContext';

const ItemDetailContainer = () => {
    const [detailProduct, setDetailProduct] = useState({});
    const {itemId} = useParams();
    const [loader, setLoader] = useState(true);
    const {addToCart} = useContext (CartContext);
    const [goToCart, setGoToCart] = useState(false);


    useEffect(()=>{
        setLoader(true);
        const getDetailsProduct = new Promise ((res)=> {
            setTimeout(() => {
                res (data);
            }, 1000);
        });

        getDetailsProduct.then((result)=>{ 
            itemId && setDetailProduct (result.find((item) => item.id === 
            itemId));
        })
        .finally(()=>{
            setLoader(false)
        });
    }, []);

    const onAdd = (count)=>{
        addToCart(detailProduct, count)
        setGoToCart(true)
    }

    return (
        loader ? <h1>Loading...</h1> :
        
        <ItemDetail {...detailProduct} onAdd={onAdd} goToCart={goToCart} />
    );
};

export default ItemDetailContainer