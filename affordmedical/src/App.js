
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Login from './Login';
import Signup from './Signup';
import Train from './Train';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route exact path="/Signup" element={<Signup/>} />
        <Route exact path="/" element={<Login/>} />
        <Route exact path="/Train" element={<Train/>} />
        </Routes>
      </Router>
     
    </div>
  );
}

export default App;
