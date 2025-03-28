import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);
    const customStyle = {
        border: '2px solid red',
        borderRadius: 25,
    };

    const handleAdd =()=>{
        let newCount = count + 1;
        setCount(newCount)
    }
    // console.log(count);
    return (
        <div style={customStyle}>
            <h2>Count: {count} </h2>
            <button onClick={handleAdd}>Increase Counter</button>
        </div>
    )
}

