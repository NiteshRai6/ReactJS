import React, { useState } from "react";
import "./Hooks.css";

const UseStateEx = () => {
    const [myNum, setMyNum] = useState(0);

    return (
        <>
            <div className="center_div">
                <p>{myNum}</p>
                <div class="button2" onClick={() => setMyNum(myNum + 1)}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    INCREMENT
                </div>
                <div
                    class="button2"
                    onClick={() => (myNum > 0 ? setMyNum(myNum - 1) : setMyNum(0))}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    DECREMENT
                </div>
            </div>
        </>
    );
};

export default UseStateEx;