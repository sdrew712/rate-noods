import React from "react";
import "./top-bar.scss"
import Slide from '@material-ui/core/Slide';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

//is going to be used to make panda appear
// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
//     document.getElementById("nav-container").style.fontSize = "30px";
//   } else {
//     document.getElementById("nav-container").style.fontSize = "90px";
//   }
// }


function HideOnScroll(props) {
    const { children } = props;
    const trigger = useScrollTrigger();
  
    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    );
  }
  
  export default function TopBar(props) {
    return (
      <React.Fragment>
        <HideOnScroll {...props}>
            <div id="nav-container">
                <a href="#reviews">Reviews</a>
                <a href="#upgrades">Upgrades</a>
                <a href="#contact">Contact</a>
            </div>
        </HideOnScroll>
      </React.Fragment>
    );
  }