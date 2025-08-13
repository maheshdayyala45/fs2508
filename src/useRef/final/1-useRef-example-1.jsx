import React, { useEffect, useRef, useState } from 'react'

function Final () {
    const [firstName, setFirstName]= useState("");
    const renderCount = useRef(1);

    useEffect(()=>{
    renderCount.current = renderCount.current+1;
    })
  return (
    <div>
        <input type="text"
        name='firstName'
        id='firstName'
        onChange={(e)=>{
            setFirstName(e.target.value)
        }}
     />
     <h3>Typing:{firstName}</h3>
     <h3>component renderd {renderCount.current} times</h3>
    </div>
  )
}

export default Final 