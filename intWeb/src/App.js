import React from 'react';
import './App.css';
import { BrowserRouter as  Router, Route  } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';
import Crear from './components/Crear';

function App() {
  return (
    <div >
      <Router>
        <Route path='/' exact component= {Login} />
        <Route path='/Crear' component= {Crear} />  
      </Router>
    </div>
  );
}

export default App;
