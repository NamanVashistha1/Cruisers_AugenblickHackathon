import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faCommentDots,
//   faBars,
//   faXmark,
// } from "@fortawesome/free-solid-svg-icons";
import "./navbar.css";
import { Link } from "react-router-dom";
// import { toast } from "react-toastify";
// import image from "./logo.png";


function Navbar() {


  return (
    <header>
    <nav class="navbar" style={{backgroundColor: "#27888b"}}>
      <span></span>
      <div class="logo">SWACHTA</div>
      <ul class="menu">
      
        <li>
        <Link to="/upload">
          Upload
        </Link>
        
       
        </li>
       

        <li><a href="Checkout.html">About</a></li>
       
        <li><a href="/contact.html">contact</a></li>
        <li><a href="/dash">Dashboard</a></li>
        <li><a href="/history">History</a></li>
      </ul>
      <div class="btn"></div>
    </nav>
  </header>
  );
}

export default Navbar;