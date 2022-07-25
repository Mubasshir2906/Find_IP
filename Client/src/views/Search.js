import './../index.css'
import React from 'react'
import { useState } from 'react'
import {Routes, Route, NavLink} from 'react-router-dom'

function Search() {

    const [searchItem,setSearchItem] = useState('')
    const [resultEntries, setResultEntries] = useState([])
    //console.log(typeof(IP_DATA))
    //IP_DATA.forEach(entry => console.log(typeof(entry.ip_address)))

  function handleSearchChange(event){
    setSearchItem(event.target.value);
  }

  function handleSearchButton(){
    const dataFound = IP_DATA.filter(entry => entry.ip_address == searchItem)
    // console.log(dataFound.forEach(value => console.log(value)))
    //console.log(typeof(IP_DATA))
    //console.log(typeof(searchItem))
    setResultEntries(dataFound)
  }

  return (
    <div>
        <div className='search_container'>
          <input type='text' id='search_bar' className='search-box' placeholder='Search' onChange={handleSearchChange}></input>
          <button type='submit' id='search_buton' className='search_button' onClick={handleSearchButton}>GO</button>
          <NavLink to='/new'><button id='new_entry' className='new_button search_button'>New</button></NavLink>
        </div>
    </div>
  )
}

export default Search