import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(10)
  const  addValue = () =>{
    if(counter<20){
      setCounter(counter+1)
    }
  }
  const reduceValue = () => {
    if(counter>0){
      setCounter(counter-1)
    }
  }
  return (
    <>
      <h1>Counter App</h1>
      <h3>Counter value: {counter}</h3>
      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={reduceValue}>Reduce Value</button>
    </>
  )
}

export default App
