import { useRef, useState } from "react"

const RefTutorial = () => {
  const [textContent, setTextContent] = useState('Brandon')
  const inputRef = useRef(null);

  const onClick = () => {
    inputRef.current.focus();
    setTextContent(inputRef.current.value)
  }

  return (
    <>
      <h2>This is Ref Tutorial</h2>
      <div>
        <h3>Name: <span>{textContent}</span></h3>
        <input type="text" placeholder="Ex..." ref={inputRef} />
        <button onClick={onClick}>Change Name</button>
      </div>
    </>
  )
}

export default RefTutorial
