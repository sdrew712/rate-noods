import React from "react"
import { Link } from "react-router-dom";
import "./burger.scss"

export default function Burger(){
  return (
  //   Made by Erik Terwan 
  //  24th of November 2015
  //       MIT License     
    <div id="menuToggle">
    
      {/* A fake / hidden checkbox is used as click reciever,
      so you can use the :checked selector on it. */}

      <input type="checkbox" />
      
      
      {/* Some spans to act as a hamburger.
      
      They are acting like a real hamburger,
      not that McDonalds stuff. */}

      <span></span>
      <span></span>
      <span></span>
      
      
      {/* Too bad the menu has to be inside of the button
      but hey, it's pure CSS magic. */}

      <ul id="menu">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/reviews">Reviews</Link></li>
        <li><Link to="/upgrades">Upgrades</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </div>
  );
};
