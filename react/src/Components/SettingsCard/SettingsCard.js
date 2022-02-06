import React from 'react';
import { useEffect } from 'react';

export const SettingsCard = () => {

    
    const buttonStyle = {
        border: "2px solid black",
        borderRadius: "2rem"
    }

    const inputStyle = {
        border: "2px solid black",
        borderRadius: "2rem"
    }

    const labelStyle = {

    }
    
    const handleClick = () => {
        // make api call here
    }


    return(
        <div className='card d-flex w-50 h-50 justify-content-center' style={{borderRadius:"2rem"}}>
            <h1 className='align-self-center'> MY SETTINGS </h1>
            <form className='p-4'>
                <div className="row">
                    <div className="col">
                        <label for="ageRange">Age Range</label>
                    </div>
                    <div className="col">
                        <input type="number" min="0" max="100" class="form-control" id="ageLB" aria-describedby="ageUB" style={inputStyle}/>
                    </div>
                    <div className="col">
                        <input type="number" min ="0" max="100" class="form-control" id="ageUB" aria-describedby="ageUB" style={inputStyle}/>
                    </div>
                </div>
                <div className="row pt-4">
                    <div className="col">
                        <label for="race">Race</label>
                    </div>
                    <div className="col">
                        <select class="custom-select" id="raceSelect" style={inputStyle}>
                            <option selected>Race</option>
                            <option value="1">Black or African American</option>
                            <option value="2">White</option>
                            <option value="3">Asian</option>
                            <option value="4">American Indian or Alaska Native</option>
                            <option value="5">Native Hawaiian or Pacific Islander</option>
                        </select>
                    </div>
                </div>
                <div className="row pt-4">
                    <div className="col">
                        <label for="race">Gender</label>
                    </div>
                    <div className="col">
                        <select class="custom-select" id="genderSelect" style={inputStyle}>
                            <option selected>Gender</option>
                            <option value="1">Male</option>
                            <option value="2">Female</option>
                            <option value="3">Non-binary</option>
                        </select>
                    </div>
                </div>
                <div className="row pt-4">
                    <div className="col d-flex flex-row justify-content-center">
                        <button 
                            className="btn" 
                            onClick={handleClick}
                            style={buttonStyle}
                            >
                                Start Swiping!
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
};
