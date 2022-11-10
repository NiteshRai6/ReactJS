import React from 'react';

function Car(props) {
    return (
        <>
            <h2>My brand name is {props.brand.name} !</h2>
            <h2>My model name is {props.brand.model} !</h2>
        </>
    );
}

function PropsEx() {
    const carInfo = { name: "RangeRover", model: "Evoke" };
    return (
        <>
            <h1>Who lives in my garage?</h1>
            <Car brand={carInfo} />
        </>
    );
}
export default PropsEx;