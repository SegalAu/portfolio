import logo from './logo.svg';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import NavBar from "./components/NavBar";
import Home from "./components/Home";

function App() {
  return (
    <Router hashType="slash">
      <div className="App">
          <NavBar/>
          <div>
            <Route path='/' exact component={Home} />
            
          </div>     
      </div>
    </Router>
  );
}

export default App;
