
import React, {Fragment} from "react"
import {useState, useEffect} from "react"
import {BsGearFill, BsFillPencilFill} from "react-icons/bs"
import {MdSwipe} from "react-icons/md"
import {useNavigate} from "react-router-dom"
import axios from "axios"
import Cookies from "js-cookie"
import { motion } from 'framer-motion'

export const Home = props => {
  const [name, setName] = useState(null)
  const [prof, setProf] = useState(null)

  let navigate = useNavigate()

  useEffect(() => {
    // initialize local storage if not
    if (!localStorage.getItem("gender")) {
      localStorage.setItem("gender", null)
    }

    if (!localStorage.getItem("race")) {
      localStorage.setItem("race", null)
    }

    if (!localStorage.getItem("age")) {
      localStorage.setItem("age", null)
    }

    if (!localStorage.getItem("radius")) {
      localStorage.setItem("radius", null)
    }
  }, [])

  useEffect(() => {
    console.log(props)
    if (props.user) {
      setName(props.user.first_name + " " + props.user.last_name)
      setProf(props.user.avatar)
    }
  }, [props])

  const buttonStyle = {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    fontSize: "12px",
    textAlign: "center",
    border: "2px solid black"
  }

  const iconStyle = {
    height: "100%",
    width: "100%"
  }

  const imageStyle = {
    borderRadius: "50%",
    border: "2px solid white",
    width: "200px",
    height: "200px",
    overflow: "hidden"
  }

  return (
    <div className='container d-flex flex-column w-100 vh-100 justify-content-center align-items-center' style={{background: "#FFF4E0"}}>
       {name && prof ? (
        <Fragment>
      <img 
        src={prof} 
        alt=""
        style={imageStyle}
      />
      <h1>{name}</h1>
      <div className="container d-flex flex-row w-50 justify-content-center">
        <motion.div className="" whileHover={{scale:1.1}}>
          <button 
            className='btn m-2' 
            style={buttonStyle}
            onClick = {() => navigate('/settings')}
          >
            <BsGearFill style={iconStyle}/>
          </button>
        </motion.div>
        <motion.div className="" whileHover={{scale:1.1}}>
          <button 
            className='btn m-2'
            style={buttonStyle}
            onClick = {() => navigate('/edit')}
          >
            <BsFillPencilFill style={iconStyle}/>
          </button>
        </motion.div>
        <motion.div className="" whileHover={{scale:1.1}}>
          <button 
            className='btn m-2' 
            style={buttonStyle}
            onClick={() => navigate('/match')}
          >
            <MdSwipe style={iconStyle}/>
          </button>
        </motion.div>
      </div>
</Fragment>):(
<h2>Loading...</h2>
)}
    </div>
  )
}
