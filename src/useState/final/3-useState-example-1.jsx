import React, { useState } from "react";

const Index = () => {
 const [showData, setShowData]=useState(false)

 const handleclick=()=>{
     setShowData(!showData)
 }

    return (

        
        <div>
 <button onClick={handleclick}>{showData ? "hide" : "show"}</button>
            {/* {
                showData && (
                    <div>
                Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Recusandae possimus 
                tenetur numquam inventore ab eaque magni 
                consectetur optio molestias sequi?
            </div>

                )
            } */}
       {
        showData ? (
            <div>
                Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Recusandae possimus 
                tenetur numquam inventore ab eaque magni 
                consectetur optio molestias sequi?
            </div> 
        ) : (
            <h3>data is hidden</h3>
        )
       }
        </div>
    )
}
export default Index;