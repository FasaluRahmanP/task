import React, { useState } from 'react'

function OddEven() {
    const[state,setstate]=useState()
    const[state1,setstate1]=useState()
    const[color,setcolor]=useState("blue")
    const[color1,setcolor1]=useState("black")
    const handleclick=()=>{
        setstate1(state)
    }

  return (
    <div>
        <div style={{height:"100px", width:"100px",border:"2px solid red"}}>Number:{state1%2==0?color:color1}</div>
        <input placeholder='Enter The Number' onChange={(e)=>setstate(e.target.value)}>
        </input><button onClick={handleclick}>Submit</button>
    </div>
  )
}

export default OddEven