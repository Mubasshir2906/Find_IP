import React, { useState } from 'react'
import './../index.css';

function New() {
  const [ipAddress,setIpAddress] = useState('');
  const [ipName,setIpName] = useState('');
  const [ipSubnet,setIpSubnet] = useState('');
  const [ipComment,setIpComent] = useState('')


  function handleSaveButton(){

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ipAddress: ipAddress, ipName: ipName, ipSubnet: ipSubnet, ipComment: ipComment})
  };
  fetch('http://localhost:2000/new', requestOptions)
      .then(response => response.json())
      .then(data => console.log("From Client: ",data));

    setIpAddress('');
    setIpName('');
    setIpSubnet('');
    setIpComent('');
  }
  return (
        <div className='new-form'>
          <ul id='new-form' className='new-form-list'>
            <li><input id='new-ip' className='form-input new-form-input' placeholder='IP Address' onChange={e => setIpAddress(e.target.value)} value={ipAddress}></input></li>
            <li><input id='new-ip-name' className='form-input new-form-input' placeholder='Name' onChange={e => setIpName(e.target.value)} value={ipName}></input></li>
            <li><input id='new-ip-subnet' className='form-input new-form-input' placeholder='Subnet' onChange={e => setIpSubnet(e.target.value)} value={ipSubnet}></input></li>
            <li><textarea id='new-ip-comment' className='form-input new-form-input new-ip-comment' placeholder='Comments' onChange={e => setIpComent(e.target.value)} value={ipComment}></textarea></li>
            <li><button id='new-save' className='new-form-button' onClick={handleSaveButton}>Save</button></li>
          </ul>
        </div>
  )
}

export default New