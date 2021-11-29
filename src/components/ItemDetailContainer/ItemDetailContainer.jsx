import React, {useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import data from '../Item/items';
import './ItemDetailContainer.css';
import  {useParams}  from 'react-router-dom';

const ItemDetailContainer = () => {
    const [detailProduct, setDetailProduct] = useState({});
    const {itemId} = useParams();
    const [loader, setLoader] = useState(true);

    useEffect(()=>{
        setLoader(true);
        const getDetailsProduct = new Promise ((res)=> {
            setTimeout(() => {
                res (data);
            }, 2000);
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
        console.log({...detailProduct, cantidad:count} )
    }

    return (
        loader ? <h1>Loading...</h1> :
        
        <ItemDetail {...detailProduct} onAdd={onAdd} />
    );
};

export default ItemDetailContainer