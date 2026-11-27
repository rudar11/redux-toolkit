import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementbyamount } from './redux/features/counterSlice'

const App = () => {
const dispatch = useDispatch()
const count = useSelector((state)=>state.counter.value)  //

  return (
    <div>
 <h1>{count}</h1>
 <button onClick={()=>{
dispatch(increment())
 }}>increment</button>


 <button onClick={()=>{
  dispatch(decrement())
 }}  >decrement</button>

<button onClick={()=>{
dispatch(incrementbyamount(10))
}}>
  increase by Amount
</button>

    </div>
  )
}

export default App
