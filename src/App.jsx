import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incremetbyamount } from './redux/features/counterSlice'

const App = () => {

const [num, setNum] = useState('')

 const dispatch = useDispatch()
 const count = useSelector((state)=>state.counter.value)

  return (
    <div className='text-center justify-center mt-50 '>
      <h1 className='text-4xl'>{count}</h1>
      <button className='bg-blue-700 rounded-2xl px-4 py-2' onClick={()=>{
        dispatch(increment())
      }}>increse</button>
      <button className='bg-blue-700 rounded-2xl px-4 py-2 m-5 '  onClick={()=>{

        if (count>0) {
          
          dispatch(decrement())
        }
      }}>decrease</button>

<input  className='text-white outline-none' placeholder='enter num' type="number"   value={num} onChange={(e)=>{

setNum(e.target.value)
}} />

      <button className='bg-blue-700 rounded-2xl px-4 py-2  '  onClick={()=>{
         dispatch(incremetbyamount(Number(num)))
      }}>  increse by amount</button>
    </div>
  )
}

export default App
