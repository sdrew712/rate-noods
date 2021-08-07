import React from "react";
import Headroom from "react-headroom";
import Panda from "../panda.png";
import Burger from "../Burger/Burger"
import "./top-bar.scss"
import { Link } from "react-router-dom";


export default function TopBar() {
  return (
    <Headroom className="headroom">
        <Link to="/"><img src={Panda} className="panda-nav" alt="panda_img"/></Link>
        <Burger />
    </Headroom>
  );
}