import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className='p-5'> 
      <h1>welcome to react js app development</h1>
      <button className='btn btn-danger'>click me!!</button>
      <button className='btn btn-success'>click me!!</button>
      <button className='btn btn-info'>click me!!</button>
      <button className='btn btn-primary'>click me!!</button>
      <button className='btn btn-secondary'>click me!!</button>
      <button className='btn btn-dark'>click me!!</button>
      <button className='btn btn-light'>click me!!</button>
      <button className='btn btn-success text-subtle'>click me!!</button>
      <button className='border d-inline-block p-2 rounded bg-success-subtle text-success'>click me!!</button>
       
         
     </div>
    </>
  )
}

export default App
