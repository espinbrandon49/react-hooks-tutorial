import axios from "axios";
import { useEffect, useState } from "react";

const EffectTutorial = () => {
  const [data, setData] = useState('');
  const [count, setCount] = useState(0);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        // console.log(response.data)
        console.log('meow')
        setData(response.data.map((subject, i) => <li>{subject.email}</li>))
      })
  }, [count])

  const increment = () => {
    setCount(count + 1)
  }

  return (
    <>
      <h2>This is the Effect Tutorial</h2>
      <p>{data}</p>
      <p>{count}</p>
      <button onClick={increment}>Click</button>
    </>
  )
}

export default EffectTutorial
