import React from "react";
import { useState } from "react";

const Index=()=>{

    const initialArray=[
        {
            id:"1",
            firstname:"mahesh",
            lastname:"dayyala",
            age:23
        },
        {
            id:"2",
            firstname:"harika",
            lastname:"burugu",
            age:21
        }
    ];

const [data, setData]=useState(initialArray);
console.log(data);

const deleting=(comingId)=>{
    const filterData=data.filter((eachobj)=>{
       return eachobj.id !==comingId;
    });
   setData(filterData)
// console.log(filterData);
}

    return(
        <div>
            <ul>
             {data.map((eachobj,index)=>{
          const {firstname,lastname,age,id}=eachobj;
        return(
            <li key={index}>
                <div>my firstname <strong>{firstname}</strong></div>
               <div>my lastname <strong>{lastname}</strong></div>
               <div>my age <strong>{age}</strong></div>
               <button onClick={()=>deleting(id)}>delete</button>
            </li>
        )

             })}   
            </ul>
       
        </div>
    )
}
export default Index;

