import React, { useEffect } from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';


export const SettingsCard = () => {

    const [age, setAge] = useState([0, 100])
    const [race, setRace] = useState(0)
    const [gender, setGender] = useState(0)
    const [radius, setRadius] = useState(100)

    function ageText(age) {
        return `${age}`;
    }

    function radiusText(radius) {
        return `${radius} km`;
    }

    
    const radiusMarks = [
        {
          value: 0,
          label: '0 km',
        },
        {
          value: 25,
          label: '25 km',
        },
        {
          value: 50,
          label: '50 km',
        },
        {
            value: 75,
            label: '75 km',
          },
        {
          value: 100,
          label: '+100 km',
        },
      ];

    const buttonStyle = {
        border: "2px solid black",
        borderRadius: "2rem"
    }

    const inputStyle = {
        border: "2px solid black",
        borderRadius: "2rem"
    }

    const handleRace = () => {
        setRace(document.getElementById("raceSelect").value)
    }

    const handleGender = () => {
        setGender(document.getElementById("genderSelect").value)
    }

    const handleAgeChange = (e, newAge) => {
        setAge(newAge)
    }

    const handleRadiusChange = (e, newRadius) => {
        setRadius(newRadius)
    }

    const handleClick = () => {
        localStorage.setItem('gender', gender)
        localStorage.setItem('race', race)
        localStorage.setItem('age', age)
        localStorage.setItem('radius', radius)
    }


    return(
        <div className='card d-flex w-50 h-75 justify-content-center' style={{borderRadius:"2rem"}}>
            <h1 className='align-self-center'> MY SETTINGS </h1>
            <form className='p-4'>
                <div className="row">
                    <div className="col">
                        <label htmlFor="ageRange">Age Range</label>
                    </div>
                    <div className="col">
                    <Box sx={{width:300}}>
                        <Slider
                            value={age}
                            onChange={handleAgeChange}
                            valueLabelDisplay="auto"
                            getAriaValueText={ageText}
                        />
                    </Box>
                    </div>
                </div>
                <div className="row pt-4">
                    <div className="col">
                        <label htmlFor="race">Race</label>
                    </div>
                    <div className="col">
                        <select className="custom-select" id="raceSelect" style={inputStyle} onChange={handleRace}>
                            <option value={0}>All Races</option>
                            <option value={1}>Black or African American</option>
                            <option value={2}>White</option>
                            <option value={3}>Asian</option>
                            <option value={4}>American Indian or Alaska Native</option>
                            <option value={5}>Native Hawaiian or Pacific Islander</option>
                        </select>
                    </div>
                </div>
                <div className="row pt-4">
                    <div className="col">
                        <label htmlFor="race">Gender</label>
                    </div>
                    <div className="col">
                        <select className="custom-select" id="genderSelect" style={inputStyle} onChange={handleGender}>
                            <option value={0}>All Gender</option>
                            <option value={1}>Male</option>
                            <option value={2}>Female</option>
                            <option value={3}>Non-binary</option>
                        </select>
                    </div>
                </div>
                <div className="row pt-4 pr-2">
                    <div className="col">
                        Radius
                    </div>
                    <div className="col">
                        <Box sx={{width:300}}>
                            <Slider
                                value={radius}
                                onChange={handleRadiusChange}
                                valueLabelDisplay="auto"
                                getAriaValueText={radiusText}
                                marks={radiusMarks}
                            />
                        </Box>
                    </div>
                </div>
                <div className="row pt-4">
                    <div className="col d-flex flex-row justify-content-center">
                        <div
                            className="btn" 
                            onClick={handleClick}
                            style={buttonStyle}
                            >
                                Save Settings!
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
};
