import React, { useEffect, useState } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { hot } from "react-hot-loader/root";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./NavBar";
import Hero from "./Hero";
import QuotesContainer from "../containers/QuotesContainer";
// import homer from "../../homer.png";
// import axios from "axios";

const App = () => {
  // const [quotes, setQuotes] = useState([]);

  // useEffect(() => {
  //   console.log("aca");
  //   axios
  //     .get(
  //       "https://cors-anywhere.herokuapp.com/https://thesimpsonsquoteapi.glitch.me/quotes?count=15"
  //     )
  //     .then((response) => console.log(response.data))
  //     .catch((err) => console.log(err));

  // const fetchData = async () => {
  //   const result = await fetch(
  //     "https://thesimpsonsquoteapi.glitch.me/quotes"
  //   );
  //   const data = await result.json();
  //   console.log(data[0].quote);

  //   setQuote({
  //     text: data[0].quote,
  //     author: data[0].character
  //   });
  // }, []);

  return (
    <div>
      <NavBar />
      <div className='main-body'>
        <Switch>
          <Route exact path='/' component={Hero} />
          <Route exact path='/quotes' component={QuotesContainer} />
        </Switch>
      </div>
    </div>
  );
};

export default hot(App);
