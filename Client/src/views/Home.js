import './../index.css'
import React from 'react'
import { useState, useEffect, useContext } from 'react'
import {ResultContext} from './../ResultContext'

function Home() {

    const [searchItem,setSearchItem] = useState('')
    //const [resultEntries, setResultEntries] = useState([])
    const resultContext = useContext(ResultContext);

    useEffect(()=>{
      fetch('http://localhost:2000/',{
        mode: 'cors',
        headers: {
          'Access-Control-Allow-Origin':'*'
        }
      })
      .then(response => response.json())
      .then(data => {
        resultContext.setResultData(data)
        //console.log("resultEntries:",resultEntries)
      })
      .catch(e => console.error(e))
    },[]);

  function handleSearchChange(event){
    
  }

  function handleSearchButton(){
    

   
  }

  return (
        <div className='search_container'>
          <input type='text' id='search_bar' className='search-box' placeholder='Search' onChange={handleSearchChange}></input>
          <button type='submit' id='search_buton' className='search_button' onClick={handleSearchButton}>GO</button>
        </div>
  )
}

export default Home