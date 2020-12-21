import React, { useEffect, useState } from "react";
import {
  Route,
  Redirect,
  Switch,
  useLocation,
  useHistory,
} from "react-router-dom";
import { hot } from "react-hot-loader/root";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import QuotesContainer from "./QuotesContainer";
import Footer from "../components/Footer";
import axios from "axios";

const App = () => {
  const history = useHistory();

  const goToQuotes = () => history.push("/quotes");

  const location = useLocation().pathname;

  return (
    <div>
      <NavBar />
      <div className='main-body'>
        <Switch>
          <Route
            exact
            path='/'
            render={() => <Hero goToQuotes={goToQuotes} />}
          />
          <Route exact path='/quotes' component={QuotesContainer} />
        </Switch>
      </div>
      <Footer location={location} />
    </div>
  );
};

export default hot(App);
