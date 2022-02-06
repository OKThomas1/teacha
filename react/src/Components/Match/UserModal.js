
import React from 'react';

const UserModal = (props) => {

  let name = "Roh"

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
            <h1>{name}</h1>
        </div>
        <div className="card-body d-flex flex-column align-items-center" style={{ backgroundColor: "#FFF4E0" }} >
          <img 
            src="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg" 
            alt=""
            style={imageStyle}
          />
          <div class="form-row pt-4">
            <div class="form-group col-md-6">
              <label>Work</label>
              <input type="text" class="form-control" placeholder="Work" readOnly/>
            </div>
            <div class="form-group col-md-6">
              <label>Job Title</label>
              <input type="text" class="form-control" placeholder="JOB" readOnly/>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label>School</label>
              <input type="text" class="form-control" placeholder="SCHOOL" readOnly/>
            </div>
            <div class="form-group col-md-6">
              <label>Education Level</label>
              <input type="text" class="form-control" placeholder="EDUCATION" readOnly/>
            </div>
          </div>
          <div class="form-row">
              <label>Home Town</label>
              <input type="text" class="form-control" placeholder="HOME TOWN" readOnly/>
          </div>
          <div class="form-row" style={{width:"80%", height:"25%"}}>
              <label>Bio</label>
              <input type="text" class="form-control" placeholder="BIO" readOnly/>
          </div>
        </div>
      </div>
    </div>
  )
};

export default UserModal