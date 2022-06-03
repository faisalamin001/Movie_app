import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";

function Header() {
  const [resmenu, setresmenu] = useState("none");
  function showres() {
    if (resmenu === "none") {
      setresmenu("block");
    } else {
      setresmenu("none");
    }
  }
  return (
    <div>
      <div className='nav'>
        <div className='logo'>
          <h1>Netflix</h1>
        </div>
        <div className='icon'>
          <i onClick={showres} class='fas fa-bars'></i>
        </div>
        <div className='menu'>
          <Link to='/'>Home</Link>
          <Link to='/browse'> Browse</Link>
          <Link to='/about'>About Us</Link>
        </div>
      </div>
      <div style={{ display: resmenu }} className='resmenu'>
        <Link onClick={showres} to='/'>
          Home
        </Link>
        <Link onClick={showres} to='/browse'>
          {" "}
          Browse
        </Link>
        <Link onClick={showres} to='/about'>
          About Us
        </Link>
      </div>
    </div>
  );
}

export default Header;
