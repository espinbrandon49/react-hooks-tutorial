import { useState } from "react";


const StateTutorial = () => {
  const [counter, setCounter] = useState(0)
  const [value, setValue] = useState('Brandon')

  const increment = () => {
    setCounter(counter + 1)
  };

  const onChange = (e) => {
    setValue(e.target.value)
  }

  return (
    <>
      <h2>This is state tutorial page</h2>
      <div>
        <h3>Counter</h3>
        <p>{counter}</p>
        <button onClick={increment}>Increment</button>
      </div>
      <hr />
      <div>
        <h3>Enter Value</h3>
        <input onChange={onChange} placeholder="Enter Something" />
        <p>{value}</p>
      </div>
    </>
  )
}

export default StateTutorial
