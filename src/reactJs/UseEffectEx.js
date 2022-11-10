import React, { useState, useEffect } from 'react';

function UseEffectEx() {

    const [count, setCount] = useState(0);
    const [data, setData] = useState(10);

    useEffect(() => {
        console.log("Called with Count Effect")
    }, [count]);

    useEffect(() => {
        console.log("Called with Data Effect")
    }, [data]);

    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Count : {count}</h1>
            <button onClick={() => setCount(count + 1)}>Update Count</button>

            <h1>Data : {data}</h1>
            <button onClick={() => setData(data + 10)}>Update Data</button>
        </div>
    );
}
export default UseEffectEx;