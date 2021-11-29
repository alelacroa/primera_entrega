import React, {useState, useEffect} from 'react';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css';
import data from '../Item/items';
import  {useParams}  from 'react-router-dom';


const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([]);
    const {categoryId} =useParams();
    const [loader, setLoader] = useState(true);

    useEffect(()=>{
        setLoader(true);
        const getProducts = new Promise ((resolve)=>{
            setTimeout(()=>{
                resolve (data);
            }, 2000);
        });
        getProducts
        .then((res)=>{
            const filtrar = res.filter((prod)=> prod.categoryId === `${categoryId}`);
            categoryId === undefined ? setProducts(res) : setProducts(filtrar)    
        })
        .catch((error)=>{
            console.log(error)
        })
        .finally(()=>{
            setLoader(false)
        });
    }, [categoryId]);

    return ( loader ? <h1>Loading...</h1> :
        <div>
            <h1>{greeting}</h1>
        <section>
            <ItemList products ={products} />
        </section>
        </div>
    );
};

export default ItemListContainer