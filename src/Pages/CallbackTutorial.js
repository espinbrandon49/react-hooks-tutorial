import axios from "axios";
import { useCallback, useState } from "react";
import Child from "../Components/Child";

const CallbackTutorial = () => {
  const [toggle, setToggle] = useState(false);
  const [data, setData] = useState('This is a state')

const returnComment = useCallback(
  (name => {
    return data + name
  })
)
  return (
    <>
      <h2>Callback Tutorial</h2>
      <div>
        <Child returnComment={returnComment} />
        <button
          onClick={() => {
            setToggle(!toggle)
          }}
        >
          Toggle
        </button>
        {toggle && <h1> toggle </h1>}
      </div>
    </>
  )
}

export default CallbackTutorial
