import React from 'react';

const estilos = { margin: '1em', backgroundColor: 'lightblue' };
const nombre = "Vicky";

export const MiPrimerComponente = () => {

    return <h1 style={estilos}> Hola {nombre} </h1>;
};

