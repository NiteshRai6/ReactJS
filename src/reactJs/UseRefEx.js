import React, { useRef } from 'react';

function UseRefEx() {
    let inputRef = useRef(null);

    function handleInput() {
        console.log("Function Called")
        inputRef.current.value = '10';
        inputRef.current.focus();
        inputRef.current.style.color='red';
    }
    return (
        <div style = { {textAlign:'center'} }>
        <h1>useRef in React to manipulate DOM directly</h1>
        <input type = 'text' ref = {inputRef} />
        <button onClick = {handleInput}>Handle Input</button>
        </div>
    );
}
export default UseRefEx;