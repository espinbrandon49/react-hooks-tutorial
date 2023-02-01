import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Pages/Home';
import StateTutorial from './Pages/StateTutorial';
import ReducerTutorial from './Pages/ReducerTutorial';
import EffectTutorial from './Pages/EffectTutorial';
import RefTutorial from './Pages/RefTutorial';
import LayoutEffectTutorial from './Pages/LayoutEffectTutorial';
import ImperativeHandle from './Pages/ImperativeHandle';

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
          <Route path='refTutorial' element={<RefTutorial/>}/>
          <Route path='layoutEffectTutorial' element={<LayoutEffectTutorial/>}/>
          <Route path='imperativeHandle' element={<ImperativeHandle/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
