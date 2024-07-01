import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Nav from './components/Nav';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>

        <Nav  />

        <Routes>
          <Route path='/' element={ <h1>In Home</h1> }/>
          <Route path='/add' element={ <h1>In Add</h1> } />
          <Route path='/update' element={<h1>In Update</h1>} />
          <Route path='/logout' element={<h1>In Logout</h1>} />
          <Route path='/profile' element={<h1>In profile</h1>} />
        </Routes>

      </BrowserRouter>


      <Footer />
    </div>
  );
}

export default App;
