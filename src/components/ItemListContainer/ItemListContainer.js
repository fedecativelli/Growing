import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import customFetch from "../utils/customFetch";
import ItemList from "./ItemList/ItemList";
import products from "../utils/products";
import "./ItemListContainer.css";

export const ItemListContainer = () => {
    const [item, setItem] = useState([]);

    useEffect(() => {
        customFetch(2000, products)
            .then(result => setItem(result))
    }, [item]);
    return <>
        <>
            <section className="container">
                {
                    item?.length <= 0 ? <h1>Cargando, no seas ansiosx....</h1> : <ItemList products={item} />
                }

            </section>
        </>
    </>
}