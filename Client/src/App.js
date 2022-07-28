import './App.css';
import React,{useState} from 'react'
import IP_DATA from './ipdata';
import Result from './views/Result';
import Home from './views/Home';
import Nav from './views/Nav';
import {BrowserRouter, Routes, Route, NavLink} from 'react-router-dom'
import New from './views/New';
import { ResultProvider } from './ResultContext';

function App() {
  console.log(IP_DATA)
  const [searchItem,setSearchItem] = useState('');
  //console.log(typeof(IP_DATA))
  //IP_DATA.forEach(entry => console.log(typeof(entry.ip_address)))

  return (
    <BrowserRouter>
    <ResultProvider>
    <div className="App">
      <div className='landpage'>
        <Nav/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/new' element={<New/>}/>
        </Routes>
        <div className='result_section'>
          <Result/>
        </div>
      </div>
    </div>
    </ResultProvider>
    </BrowserRouter>
  );
}

export default App;
