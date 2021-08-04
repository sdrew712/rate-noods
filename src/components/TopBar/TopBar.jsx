import React from "react";
import Headroom from 'react-headroom'
import "./top-bar.scss"
import Reviews from "../Reviews/Reviews"
import Upgrades from "../Upgrades/Upgrades"
import Contact from "../Contact/Contact"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function TopBar() {
  return (
    <Headroom>
      <Router>
        <div id="nav-container">
          <Link to="/reviews">Reviews</Link>
          <Link to="/upgrades">Upgrades</Link>
          <Link to="/contact">Contact</Link>
          <Switch>
            <Route path="/reviews">
              <Reviews />
            </Route>
            <Route path="/upgrades">
              <Upgrades />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
          </Switch>
        </div>
      </Router>
    </Headroom>
  );
}