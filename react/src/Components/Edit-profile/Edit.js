import {React, useState} from 'react';
import BootstrapSwitchButton from 'bootstrap-switch-button-react';
import Header from '../Header/Header';
import Image from './circularme.jpg';
import Tags from '../Tags/Tags';

export const Edit = () => {
  const [isSwitchOn, setIsSwitchOn] = useState(false);

  const onSwitchAction = () => {
    setIsSwitchOn(!isSwitchOn);
  };
  return(
  <div className = "d-flex justify-content-around vh-100 w-100" style = {{backgroundColor: "#FFF4E0"}}> 
    <div class="row">
      <div class="col-6">
        <Header/>
          <div className="container">
              <form>
                  <div class="form-group">
                    <div class="row">
                          <div className = "col">
                            <label for="text1" class="font-weight-bold">Work</label>
                          </div>
                            <BootstrapSwitchButton
                                width = '300'
                                onstyle="light" offstyle="outline-dark" style="border"
                                onlabel='Visible'
                                offlabel='Not Visible'
                                onChange={onSwitchAction}/>
                            <textarea class="form-control" id="title" rows="1"></textarea>
                      </div>


                      <div class="row">
                        <div className = "col">
                          <label for="text1" class="font-weight-bold">Job Title</label>
                        </div>
                          <BootstrapSwitchButton
                              width = '300'
                              onstyle="light" offstyle="outline-dark" style="border"
                              onlabel='Visible'
                              offlabel='Not Visible'
                              onChange={onSwitchAction}/>
                          <textarea class="form-control" id="title" rows="1"></textarea>
                      </div>

                      <div class="row">
                        <div className = "col">
                          <label for="text1" class="font-weight-bold">School</label>
                          </div>
                          <BootstrapSwitchButton
                              width = '300'
                              onstyle="light" offstyle="outline-dark" style="border"
                              onlabel='Visible'
                              offlabel='Not Visible'
                              onChange={onSwitchAction}/>
                          <textarea class="form-control" id="school" rows="1"></textarea>
                      </div>

                      <div class="row">
                      <div className = "col">
                          <label for="text1" class="font-weight-bold">Education Level</label>
                          </div>
                          <BootstrapSwitchButton
                              width = '300'
                              onstyle="light" offstyle="outline-dark" style="border"
                              onlabel='Visible'
                              offlabel='Not Visible'
                              onChange={onSwitchAction}/>
                          <textarea class="form-control" id="education" rows="1"></textarea>
                      </div>

                      <div class="row">
                      <div className = "col">
                          <label for="text1" class="font-weight-bold">Hometown</label>
                          </div>
                          <BootstrapSwitchButton
                              width = '300'
                              onstyle="light" offstyle="outline-dark" style="border"
                              onlabel='Visible'
                              offlabel='Not Visible'
                              onChange={onSwitchAction}/>
                          <textarea class="form-control" id="hometown" rows="1"></textarea>
                      </div>
                      
                  </div>
                  <div class = "d-flex justify-content-center">
                  </div>
              </form>    
          </div>    
              <center>
                <div class = "container">
              <div class="col-xs-12 col-xs-offset-0 col-sm-offset-3 col-sm-6">
                <button type = "button" outline class="btn btn-light btn-lg btn-block" size="lg" block>Save</button>
              </div>
              </div>
              </center>
      </div>
      <div class = "col-1">
      </div>
      <div class="col-4">
          <div className = "row">
          <div class = "container">
              <div class = "d-flex justify-content-center">
                  <img src={Image} class="rounded img-fluid d-flex justify-content-center" alt="..."/>
              </div>
              <label class="form-label" for="customFile"></label>
              <input type="file" class="form-control" id="customFile" />  
          </div>
          </div>
          <div className = "row">
              <div class = "container">
                  {/* the bio */}
                  <div class="form-group">
                      <div class="row">
                          <label for="text1" class="font-weight-bold">Bio</label>
                          <textarea class="form-control" id="bio" rows="2"></textarea>
                      </div>
                  </div> 
              </div>
          </div>
          <Tags/>
      </div>
  </div>
</div>
  )};
