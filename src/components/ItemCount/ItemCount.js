import React, { useState } from 'react';

export const ItemCount = () => {
    const [counter, setCounter] = useState(0);
    const clickUno = () => {
        setCounter(counter + 1)
    }
    const clickDos = () => {
        setCounter(counter - 1)
    }

    return <>
        {counter}
        <div>
            <button onClick={clickDos}>Quitar</button>
            <button onClick={clickUno}>Agregar</button>

        </div>
    </>
}