import { useRef } from 'react';
import Button from "../Components/Button"

const ImperativeHandle = () => {
  const buttonRef = useRef(null);
  return (
    <>
      <h2>Imperative Handle Tutorial</h2>
      <button onClick={() => {
        buttonRef.current.alterToggle();
      }} >Button From Parent</button>
      <Button ref={buttonRef} />
    </>
  )
}

export default ImperativeHandle
