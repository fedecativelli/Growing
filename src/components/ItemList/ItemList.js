import React from 'react';
import Item from "../Item/Item";


function ItemList({ products }) {
    return (
        products.map(p =>
            <Item
                key={p.id}
                {...p} //name={p.name}, price={p.price},etc//
            />
        )
    );
};

export default ItemList;