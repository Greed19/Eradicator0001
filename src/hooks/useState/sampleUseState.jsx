import React, {useState} from "react";

const SampleUseState = () => {

    const [count,setCount] = useState(0)
    const adjust = (amount,operation) => {
        setCount((currentCount) => currentCount operation amount )
    }
    return  (
        <main>
            <button onClick={()=>adjust(1,"*")}>X</button>
            <span>{count}</span>
            <button></button>
        </main>
    )
}