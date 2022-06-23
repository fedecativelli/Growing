import React from 'react';

import "./Item.css";

function Item({ image, name, price, stock, initial }) {
    return (
        <>
            <div className="card">
                <h1>{name}</h1>
                <img src={image} alt="Imagen de producto" />
                <p>${price}</p>
                <p>Stock disponible:{stock}</p>
                <button className="btn-details">Ver mas detalles del producto</button>
            </div>
        </>
    )
}

export default Item;