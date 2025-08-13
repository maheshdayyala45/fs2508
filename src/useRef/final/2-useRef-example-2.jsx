import React, { useEffect, useRef, useState } from 'react'

function Final () {
    const [firstName, setFirstName]= useState("");
    const inputDom = useRef("");

    useEffect(()=>{
        console.log(inputDom);  
    });

    const focus =()=>{
       inputDom.current.focus(); 
    }

  return (
    <div>
        <input
         ref={inputDom}
         type="text"
        name='firstName'
        id='firstName'
        onChange={(e)=>{
            setFirstName(e.target.value)
        }}
     />
     <h3>Typing:{firstName}</h3>
     <button onClick={focus}>focus</button>
    </div>
  )
}

export default Final 