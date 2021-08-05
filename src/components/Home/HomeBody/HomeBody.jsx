import React from "react";
import "./home-body.scss";
import Meal from "./meal.jpg";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


export default function HomeBody(){
  return(
    <>
      <div className="style-1">
        <h2 className="header-text">Hello!</h2>
        <p className="style-1-p">I’m an instant noodle addict aspiring to try as many noodles as possible.</p>
        <Router>
          <div>
            <nav>
              <Link to="/reviews" className="button">See my noodle reviews</Link>
            </nav>
            <Switch>
              <Route path="/reviews">
              </Route>
            </Switch>
          </div>
        </Router>
      </div>

      <div className="style-2">
        <div className="container-2">
        <h2 className="header-text2">Goodbye plain noodles!</h2>
        <p>Want to learn how to make your noodles more of a meal?</p>
        <Router>
          <div>
            <nav>
              <Link to="/upgrades" className="button">Upgrade your noodles</Link>
            </nav>
            <Switch>
              <Route path="/upgrades">
              </Route>
            </Switch>
          </div>
        </Router>
        </div>
        <img src={Meal} alt="tasty_meal" className="meal"/>
      </div>

      <div className="style-1">
        <h2 className="header-text">Get in touch</h2>
        <p className="style-1-p">Have questions?  Comments?  Like my work?</p>
        <Router>
          <div>
            <nav>
              <Link to="/contact" className="button">Contact me</Link>
            </nav>
            <Switch>
              <Route path="/contact">
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    </>       
  )
}