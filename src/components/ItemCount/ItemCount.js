import React, { useState } from 'react';
import "./ItemCount.css";

const ItemCount = (props) => {
    const { stock, initial } = props;
    const [stockCount, setStockCount] = useState(stock);
    const [selectCount, setSelectCount] = useState(parseInt(initial));

    const agregar = () => {
        if (stockCount > 0) {
            setStockCount(stockCount - 1);
            setSelectCount(selectCount + 1);
        }
    }

    const quitar = () => {
        if (selectCount >= 1) {
            setStockCount(stockCount + 1);
            setSelectCount(selectCount - 1);
        }
    }

    return <>
        <div>
            <h2>Stock: {stockCount}</h2>
            <h3>Seleccionados: {selectCount}</h3>
            <button className="button2" onClick={quitar}>Quitar</button>
            <button className="button1" onClick={agregar}>Agregar</button>

        </div>
    </>
}

export default ItemCount;