import React from "react";
import Headroom from 'react-headroom'
import "./top-bar.scss"

export default function TopBar(props) {
  return (
    <Headroom>
        <div id="nav-container">
            <a href="#reviews">Reviews</a>
            <a href="#upgrades">Upgrades</a>
            <a href="#contact">Contact</a>
        </div>
    </Headroom>
  );
}