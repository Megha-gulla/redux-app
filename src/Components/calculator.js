import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { incNumber,decNumber } from '../actions'

const Calculator=() =>{
    const value=useSelector((data)=>data.changeTheNumber)
    const [count,setCount]=useState(0)
    const dispatch=useDispatch()

// const handleIncrement=()=>{
//     setCount(pre=>pre+1)
// }

const handleDecrement=()=>{
    dispatch(decNumber())
}

  return (
    <div style={{display:'flex',flexDirection:'column', alignItems:'center'}}>
        <h2>Basic Redux Example</h2>
        <div style={{display:'flex',alignItems:'center',gap:'22px'}}>
            <button onClick={()=>dispatch(incNumber())}>Increment</button>
           <p>{value}</p>
           <button onClick={handleDecrement}>Decrement</button>
        </div>
    </div>
  )
}
export default Calculator;