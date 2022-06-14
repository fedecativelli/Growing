import React from 'react';

class ClasePadre extends React.Component {
    render() {
        const { text } = this.props;
        return <h1 style={{ color: 'white' }}>{text}</h1>;
    }
}

export default ClasePadre;

