import { useState, useContext,useEffect } from 'react'
import './../App.css'
import React from 'react'
import {ResultContext} from './../ResultContext'

function Result() {
  const [resultEntries, setResultEntries] = useState([])
  const resultContext = useContext(ResultContext);

  useEffect(()=>{
    setResultEntries(resultContext.result);
  },[resultContext.result]);

  return (
        <div className='result_section'>
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
  )
}

export default Result