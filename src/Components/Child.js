import { useEffect } from "react"

const Child = ({ returnComment }) => {
  useEffect(() => {
    console.log('Function was called')
  }, [returnComment])

  return (
    <div>
      {returnComment("Brandon")}
    </div>
  )
}

export default Child
