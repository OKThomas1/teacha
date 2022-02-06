
import React from 'react';

const UserModal = (props) => {


  const imageStyle = {
    borderRadius:'50%',
    border: '2px solid white',
    width: '200px',
    height: '200px',
    overflow:'hidden'
  }

  return (
    <div className="vh-100 w-100" 
        style={{ position: "absolute", top:"0", backgroundColor: "rgba(0, 0, 0, 0.4)", zIndex: "5" }} 
        onClick={(e) => {
        e.preventDefault()
        props.setUserModal(false)
    }}>
      <div 
        className="card bg-light d-flex" 
        style={{ height: "90%", width: "50%", position: "absolute", left:"25%", top:"10%", zIndex: "5", overflow: "auto" }}>
        <div class="card-header " style={{ backgroundColor: "#FFF4E0" }}>
            <h1>{props.first_name + " " + props.last_name}</h1>
        </div>
        <div className="card-body d-flex flex-column align-items-center" style={{ backgroundColor: "#FFF4E0" }} >
          <img 
            src={props.avatar} 
            alt=""
            style={imageStyle}
          />
          <div class="form-row pt-4">
            <div class="form-group col-md-6">
              <label>Work</label>
              <input type="text" class="form-control" placeholder={props.work} readOnly/>
            </div>
            <div class="form-group col-md-6">
              <label>Job Title</label>
              <input type="text" class="form-control" placeholder={props.job_title} readOnly/>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label>School</label>
              <input type="text" class="form-control" placeholder={props.school} readOnly/>
            </div>
            <div class="form-group col-md-6">
              <label>Education Level</label>
              <input type="text" class="form-control" placeholder={props.education_level} readOnly/>
            </div>
          </div>
          <div class="form-row">
              <label>Home Town</label>
              <input type="text" class="form-control" placeholder={props.hometown} readOnly/>
          </div>
          <div class="form-row" style={{width:"80%", height:"25%"}}>
              <label>Bio</label>
              <input type="text" class="form-control" placeholder={props.bio} readOnly/>
          </div>
        </div>
      </div>
    </div>
  )
};

export default UserModal