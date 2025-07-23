import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Counter from './features/counter/Counter'
import Products from './features/products/Products'

function App() {
 
return(
  <div className='m-5 p-5 border border-5 border-success'>
    <h1>welcome to react redux toolkit</h1>
      <Counter></Counter>
      <Products></Products>
  </div>
)
  
}

export default App
