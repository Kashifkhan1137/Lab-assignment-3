import React, { useState } from 'react';

const Task3=(props)=>
 {
    const [count , setCount] =  useState(0)
    return (
        <>
            <button onClick={()=>setCount(count + 1)}>+</button>
            <h1>{count}</h1>
            <button onClick={()=>setCount(count -1)}>-</button>
        </>
    );
}

export default Task3;