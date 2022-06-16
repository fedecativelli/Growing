import React from 'react';
import ItemCount from '../ItemCount/ItemCount';

import "./Item.css";

function Item({ image, name, price, stock, initial }) {
    return (
        <div className="card">
            <h1>{name}</h1>
            <img src={image} alt="Imagen de carpa" />
            <p>${price}</p>
            <ItemCount stock={stock} initial={initial} />
        </div>
    )
}

export default Item;