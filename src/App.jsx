import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import Banner from './Banner'
import Courses from './Courses'

function App() {
  const [count, setCount] = useState(0)

  return (
  
     <div className=''> 
      <Header></Header>
      <Banner></Banner>
      <Courses></Courses>
       
         
     </div>
    
  )
}

export default App
