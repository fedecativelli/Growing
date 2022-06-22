import React, { useState, useEffect } from 'react';
import ItemList from "../ItemList/ItemList";
import ItemDetail from "../ItemDetail/ItemDetail";

export const ItemDetailContainer = ({ id }) => {
    const [product, setProduct] = useState(null);

    useEffect(() => {
        ItemList(Number(id), setProduct);
    }, [id]);

    return (
        <>
            {product ? <ItemDetail item={product} /> : <p>buscando producto...</p>}
        </>
    );
};
