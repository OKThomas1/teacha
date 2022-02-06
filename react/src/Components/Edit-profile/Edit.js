import {React, useEffect, useState} from "react"
import BootstrapSwitchButton from "bootstrap-switch-button-react"
import Header from "../Header/Header"
import Image from "./circularme.jpg"
import Tags from "../Tags/Tags"

export const Edit = props => {
  const [isSwitchOn, setIsSwitchOn] = useState(null)

  const onSwitchAction = () => {
    setIsSwitchOn(!isSwitchOn)
  }

  var apiEndPoint = ""
  apiEndPoint = "/api/get-matching-users"

  const [user, setUser] = useState(null)

  const fileUpload = e => {
    console.log(e.target.files[0])
  }

  useEffect(() => {
    if (props.user) {
      setUser(props.user)
      setIsSwitchOn(props.user.visible)
    }
  }, [props.user])

  function editUsers() {
    let changes = {}
    if (isSwitchOn !== props.user.visible) {
      changes.visible = isSwitchOn
    }
    if (document.getElementById("work").value !== props.user.work) {
      changes.work = document.getElementById("work").value
    }
    if (document.getElementById("job").value !== props.user.job_title) {
      changes.job_title = document.getElementById("job").value
    }
    if (document.getElementById("school").value !== props.user.school) {
      changes.school = document.getElementById("school").value
    }
    if (document.getElementById("education").value !== props.user.education_level) {
      changes.education_level = document.getElementById("education").value
    }
    if (document.getElementById("hometown").value !== props.user.hometown) {
      changes.hometown = document.getElementById("hometown").value
    }
    if (document.getElementById("bio").value !== props.user.bio) {
      changes.bio = document.getElementById("bio").value
    }
    axios
      .put(
        apiEndPoint,
        {
          changes
        },
        {headers: {"X-CSRFTOKEN": Cookies.get("csrftoken")}}
      )
      .then(res => {
        setUser(res.data)
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <div className="d-flex justify-content-around vh-100 w-100" style={{backgroundColor: "#FFF4E0"}}>
      {user ? (
        <div class="row">
          <div class="col-6">
            <div className="container">
              <form>
                <div class="form-group">
                  <BootstrapSwitchButton width="300" onstyle="light" offstyle="outline-dark" style="border" onlabel="Visible" offlabel="Not Visible" onChange={onSwitchAction} />
                  <div class="row">
                    <div className="col">
                      <label for="text1" class="font-weight-bold">
                        Work
                      </label>
                    </div>
                    <textarea class="form-control" id="work" rows="1" placeholder={user.work}></textarea>
                  </div>

                  <div class="row">
                    <div className="col">
                      <label for="text1" class="font-weight-bold">
                        Job Title
                      </label>
                    </div>
                    <textarea class="form-control" id="job" rows="1" placeholder={user.job_title}></textarea>
                  </div>

                  <div class="row">
                    <div className="col">
                      <label for="text1" class="font-weight-bold">
                        School
                      </label>
                    </div>
                    <textarea class="form-control" id="school" rows="1" placeholder={user.school}></textarea>
                  </div>

                  <div class="row">
                    <div className="col">
                      <label for="text1" class="font-weight-bold">
                        Education Level
                      </label>
                    </div>
                    <textarea class="form-control" id="education" rows="1" placeholder={user.education_level}></textarea>
                  </div>

                  <div class="row">
                    <div className="col">
                      <label for="text1" class="font-weight-bold">
                        Hometown
                      </label>
                    </div>
                    <textarea class="form-control" id="hometown" rows="1" placeholder={user.hometown}></textarea>
                  </div>
                </div>
                <div class="d-flex justify-content-center"></div>
              </form>
            </div>
            <center>
              <div class="container">
                <div class="col-xs-12 col-xs-offset-0 col-sm-offset-3 col-sm-6">
                  <button onClick={() => editUsers()} type="button" outline class="btn btn-light btn-lg btn-block" size="lg" block>
                    Save
                  </button>
                </div>
              </div>
            </center>
          </div>
          <div class="col-1"></div>
          <div class="col-4">
            <div className="row">
              <div class="container">
                <div class="d-flex justify-content-center">
                  <img
                    style={{
                      borderRadius: "50%",
                      width: "300px",
                      height: "300px",
                      border: "2px solid black"
                    }}
                    src={Image}
                    class="img-fluid d-flex justify-content-center"
                    alt="..."
                  />
                </div>
                <label class="form-label" for="customFile"></label>
                <input type="file" class="form-control" id="customFile" onChange={fileUpload} />
              </div>
            </div>
            <div className="row">
              <div class="container">
                {/* the bio */}
                <div class="form-group">
                  <div class="row">
                    <label for="text1" class="font-weight-bold">
                      Bio
                    </label>
                    <textarea class="form-control" id="bio" rows="2" placeholder={user.bio}></textarea>
                  </div>
                </div>
              </div>
            </div>
            {/*<div className="row">
              <div class="container">
                <Tags />
              </div>
                  </div>*/}
          </div>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  )
}
