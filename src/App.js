import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react'
import IP_DATA from './ipdata';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Search from './views/Search.js'
import Result from './views/Result.js'
import New from './New.js'

function App() {

  
  return (
    <BrowserRouter>
    <div className="App">
      <h1 className='page_title'>IP Database Search</h1>
      <div className='landpage'>
        <Search/>
        <Result/>
      </div>
    </div>
    <Routes>
      <Route path='/new' element={<New/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
