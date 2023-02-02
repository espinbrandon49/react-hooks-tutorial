import { useContext } from "react";
import { AppContext } from "../Pages/ContextTutorial";

const Login = () => {

  const {setUsername} = useContext(AppContext)

  return (
    <>
      <div>
        <input
          onChange={(e) => { setUsername(e.target.value) }}
        />
      </div>
    </>
  )
}

export default Login