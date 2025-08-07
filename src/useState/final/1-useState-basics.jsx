import React from "react";
import { useState } from "react";

const Index =()=> {
    const [count, setCount]=useState(0);
  
    const increment=()=>{
         setCount(count+1)
    }
    const decrement=()=>{
        setCount((prevCount)=>{
            return prevCount-1
        });
        setCount((prevCount)=>{
            return prevCount-1
        })

    }


  return (
     <div className='container'>
        <button className='btn1' onClick={increment}>inc</button>
        <span>{count}</span>
        <button className='btn2' onClick={decrement}>dec</button>

     </div>
  )
}

export default Index;