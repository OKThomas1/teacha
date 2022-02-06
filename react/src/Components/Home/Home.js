import React from 'react';
import { useState, useEffect } from 'react';
import { BsGearFill, BsFillPencilFill } from 'react-icons/bs'
import { MdSwipe} from 'react-icons/md'
import { useNavigate } from 'react-router-dom'


export const Home = () => {

  let name = "Emily"

  let navigate = useNavigate()

  const buttonStyle = {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    fontSize: '12px',
    textAlign: 'center',
    border:'2px solid black'
  }

  const iconStyle = {
    height:'100%',
    width:'100%'
  }

  return (
    <div className='container d-flex flex-column w-100 vh-100 justify-content-center align-items-center' style={{background: "#FFF4E0"}}>
      <img 
        src="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg" 
        alt=""
        style={{
          borderRadius:'50%',
          border: '2px solid black'
          }}
      />
      <h1>{name}</h1>
      <div className="container d-flex flex-row w-50 justify-content-center">
        <button 
          className='btn m-2' 
          style={buttonStyle}
          onClick = {() => navigate('../settings', {replace:true})}
          >
          <BsGearFill style={iconStyle}/>
        </button>
        <button className='btn m-2' style={buttonStyle}>
          <BsFillPencilFill style={iconStyle}/>
        </button>
        <button className='btn m-2' style={buttonStyle}>
          <MdSwipe style={iconStyle}/>
        </button>
      </div>
    </div>
  )
};
