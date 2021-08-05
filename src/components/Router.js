import React from "react";
import TopBar from "./TopBar/TopBar";
import Footer from "./Footer/Footer";
import Home from "./Home/Home";
import Reviews from "./Reviews/Reviews";
import Upgrades from "./Upgrades/Upgrades";
import Contact from "./Contact/Contact";
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

function Router() {
  return (
    <BrowserRouter>
      <TopBar />
      <Switch>
        <Route path="/reviews" component={Reviews} />
        <Route path="/upgrades" component={Upgrades} />
        <Route path="/contact" component={Contact} />
        <Route path="/" component={Home} />
        <Route path="/*">
          <Redirect to="/" />
        </Route>
      </Switch>

      <Footer />   
    </BrowserRouter> 
  );
}

export default Router;
