import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Pages/Home';
import StateTutorial from './Pages/StateTutorial';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='stateTutorial' element={<StateTutorial/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
