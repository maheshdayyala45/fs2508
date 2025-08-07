import React from "react";
import { useState } from "react";

const Index=()=>{

    const initialobj={
        firstname:"emma",
        lastname:"mattress",
        age:24
    }

    const [data, setData]=useState(initialobj);

const changeFirstName=()=>{
    setData({
        ...data,
        firstname:"akshay",
        // lastname:"bhargavi"
    })
}

const changeLastName=()=>{
    setData({
        ...data,
         lastname:"bhargavi"
    })
}

    return(
        <div>
           <h1>my name is {data.firstname}</h1> 
           <button onClick={changeFirstName}>change name</button>
           <h1>my name is {data.lastname}</h1>
           <button onClick={changeLastName}>change name</button>
           <h3>my age is {data.age}</h3>
        </div>
    )
}
export default Index;