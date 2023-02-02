import { useContext } from "react";
import { AppContext } from "../Pages/ContextTutorial";

const User = () => {

  const {username} = useContext(AppContext)

  return (
    <>
      <div>
        <h3>User:{username}</h3>
      </div>
    </>
  )
}

export default User
