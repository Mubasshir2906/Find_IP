import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react'
import IP_DATA from './ipdata';

function App() {
  console.log(IP_DATA)
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
    <div className="App">
      <h1 className='page_title'>IP Database Search</h1>
      <div className='landpage'>
        <div className='search_container'>
          <input type='text' id='search_bar' className='search-box' placeholder='Search' onChange={handleSearchChange}></input>
          <button type='submit' id='search_buton' className='search_button' onClick={handleSearchButton}>GO</button>
          <button id='new_entry' className='new_button search_button'>New</button>
        </div>
        <div className='result_section'>
        <h1 colspan='3'>Here results will be shown</h1>
          <table className='result_table'>
            <thead className='result_head_container'>

              <tr className='result_row'>
                <th className='result_th'>IP Address</th>
                <th className='result_th'>Name</th>
                <th className='result_th'>Subnet</th>
              </tr>
            </thead>
            <tbody>
              {resultEntries.length==0 && <p style={{color: "red", textAlign:'center'}}>There are no matching results</p>}
              {resultEntries.length>0 && resultEntries.map((entry,index) => <tr key={index}><td>{entry.ip_address}</td><td>{entry.name}</td><td>{entry.subnet}</td></tr> ) }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
