import React from "react";
import Logo from "./t.png";


const Header = () => {
    return (     
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
    <div class="row">
        <img src={Logo} class="rounded img-fluid d-flex justify-content-center" width = "100" height = "100" alt="..."/>
      </div>
      <div class="col-md-1 align-right">
    </div>
  </nav> );
}
 
export default Header;