import { useLayoutEffect, useEffect, useRef } from "react"

const LayoutEffectTutorial = () => {
  const inputRef = useRef(null)

  useLayoutEffect(() => {
    console.log(inputRef.current.value)
  }, [])

  useEffect(() => {
    inputRef.current.value = 'HELLO'
  }, [])

  return (
    <>
      <h2>Layout Effect Tutorial</h2>
      <div>
        <input ref={inputRef} value="Brandon" style={{ width: 400, height: 60 }} />
      </div>
    </>
  )
}

export default LayoutEffectTutorial
