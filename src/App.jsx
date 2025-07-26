
import './App.css'
// import data from './data'
import React from 'react'

const App=() =>{
    const clicked=(e,firstname,h)=>{
        console.log("iam clicked",e,firstname,h)
    }

    return (  
       <main className="container">
    <button className='button' onClick={(e)=>{
        return clicked(e,"mahi","harika")
    }}>click me?</button>
    </main>
    )


}

export default App;
