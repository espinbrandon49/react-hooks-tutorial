import { Link } from "react-router-dom"

const Home = () => {
  return (
    <>
      <h2><i>This is the homepage</i></h2>
      <ul>
        <li><Link to="/stateTutorial">State Tutorial</Link></li>
        <li><Link to="/reducerTutorial">Reducer Tutorial</Link></li>
        <li><Link to="/effectTutorial">Effect Tutorial</Link></li>
      </ul>
    </>
  )
}

export default Home
