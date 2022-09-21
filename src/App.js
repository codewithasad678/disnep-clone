import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route, Link, Useparams } from 'react-router-dom';
import Details from './components/Details';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
        <Router>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/details' element={<Details />}  />
            <Route path='/login' element={<Login />}  />
          </Routes>
        </Router>
      
    </div>
  );
}

export default App;
