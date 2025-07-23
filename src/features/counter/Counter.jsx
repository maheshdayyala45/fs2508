import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { increment,decrement } from './Counterslice'

function Counter() {
    // we can use the React-Redux hooks to let React components interact with the Redux store. 
    // We can read data from the store with useSelector, and dispatch actions using useDispatch
     const count = useSelector((state) => state.counter.count)
      const dispatch = useDispatch()
  return (
    <div>
        <h1>counter:{count}</h1>
        <button onClick={()=>dispatch(increment())}>increment</button>
        <button onClick={()=>dispatch(decrement())}>decrement</button>
        </div>
  )
}

export default Counter;