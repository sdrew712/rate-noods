import React from "react";
import Headroom from 'react-headroom'
import "./top-bar.scss"
import { Link } from "react-router-dom";

export default function TopBar() {
  return (
    <Headroom>
      <div id="nav-container">
        <Link to="/reviews">Reviews</Link>
        <Link to="/upgrades">Upgrades</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </Headroom>
  );
}