import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div>
      <h2><i>This is the homepage</i></h2>
      <Link to="/stateTutorial">StateTutorial</Link>
    </div>
  )
}

export default Home
