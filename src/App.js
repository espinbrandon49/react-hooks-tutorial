import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Pages/Home';
import StateTutorial from './Pages/StateTutorial';
import ReducerTutorial from './Pages/ReducerTutorial';
import EffectTutorial from './Pages/EffectTutorial';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='stateTutorial' element={<StateTutorial/>}/>
          <Route path='reducerTutorial' element={<ReducerTutorial/>}/>
          <Route path='effectTutorial' element={<EffectTutorial/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
