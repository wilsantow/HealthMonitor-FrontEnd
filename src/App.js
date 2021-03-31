import React from "react";
import { Router, Switch, Route, Link } from "react-router-dom";
import Navbar from './components/Navbar'


import history from "./lib/history";



import HomePage from "./containers/HomePage/HomePage";
import UserPage from './containers/UserPage/UserPage'
import AboutPage from "./containers/AboutPage/AboutPage";

function App() {
  return (
  
      <Router history={history}>
        <Navbar/>
        <div className="md:text-xl ">
          <Switch>
            <Route  exact path="/users/:id">
              <UserPage/>
            </Route>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/about">
              <AboutPage/>
            </Route>
          </Switch>
        </div>
      </Router>

  );
}

export default App;
