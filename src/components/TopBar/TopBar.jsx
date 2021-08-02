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


export default function TopBar(props) {
  return (
    <Headroom>
      <Router>
        <div id="nav-container">
          <nav>
                <Link to="/reviews">Reviews</Link>
                <Link to="/upgrades">Upgrades</Link>
                <Link to="/contact">Contact</Link>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
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