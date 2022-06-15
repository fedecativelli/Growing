import React from 'react';
import { ItemCount } from "../ItemCount/ItemCount"

export const ItemListContainer = (props) => {
    const { mensaje } = props;
    return <>
        <>
            <section>
                <h1>{mensaje}</h1>
                <ItemCount initial="1" stock="10" />
            </section>
        </>
    </>
}