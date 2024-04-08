import React from 'react'
import useCounter from './useCounter'
function ExampleOneCust() {
    const [number, increment, decrement, reset] = useCounter()

  return (
    <div>
        <h1>Custom Hook Exaple</h1>
        <h2>Numbers : {number}</h2>
        <div>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    </div>
  )
}

export default ExampleOneCust