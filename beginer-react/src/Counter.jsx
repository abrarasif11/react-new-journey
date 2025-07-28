import React, { useState } from 'react'

const Counter = () => {
    const [count,setCount] = useState(0);
    const handleCount = () =>{
    const newCount = count + 1;
    setCount(newCount)
    }
    const handleReduce = () =>{
        const newCount = count - 1;
        setCount(newCount)
    }

  return (
    <div>
      <h3>Counter : {count}</h3>
      <button onClick={handleCount}>Click</button>
      <br />
      <button onClick={handleReduce}>Reduce</button>
    </div>
  )
}

export default Counter
