import React, { useState } from 'react'

function OddEven() {
  const [state, setstate] = useState()
  const [state1, setstate1] = useState()
  const [color, setcolor] = useState()

  const handleclick = () => {
    setstate1(state)
  }
  const a = state1 % 2 === 0 ? "black" : "blue"
  console.log(a);

  return (
    <div>
      <div style={{ height: "100px", width: "100px", border: "2px solid red", backgroundColor: a }}>Number</div>
      <input placeholder='Enter The Number' onChange={(e) => setstate(e.target.value)}>
      </input><button onClick={handleclick}>Submit</button>
    </div>
  )
}

export default OddEven