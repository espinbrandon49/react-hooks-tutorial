import { Link } from "react-router-dom"

const Home = () => {
  return (
    <>
      <h2><i>This is the homepage</i></h2>
      <ul>
        <li><Link to="/stateTutorial">State Tutorial</Link></li>
        <li><Link to="/reducerTutorial">Reducer Tutorial</Link></li>
        <li><Link to="/effectTutorial">Effect Tutorial</Link></li>
        <li><Link to="/refTutorial">Ref Tutorial</Link></li>
        <li><Link to="/layoutEffectTutorial">Use Layout Effect Tutorial</Link></li>
        <li><Link to="/imperativeHandle">Imperative Handle Tutorial</Link></li>
        <li><Link to="/contextTutorial">Context Tutorial</Link></li>
        <li><Link to="/memoTutorial">Memo Tutorial</Link></li>
        <li><Link to="/callbackTutorial">Callback Tutorial</Link></li>
      </ul>
    </>
  )
}

export default Home
