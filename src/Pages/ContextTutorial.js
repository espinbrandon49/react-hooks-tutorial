import { useState, createContext } from "react"
import Login from "../Components/Login"
import User from "../Components/User"

export const AppContext = createContext(null)

const ContextTutorial = () => {
  const [username, setUsername] = useState('');

  return (
    <>
      <h2>This is Context Tutorial</h2>
      <AppContext.Provider value={{username, setUsername}} >
        <Login /><User />
      </AppContext.Provider>
    </>
  )
}

export default ContextTutorial
