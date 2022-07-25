

import React from 'react'

function Result() {
  return (
    <div>
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
  )
}

export default Result