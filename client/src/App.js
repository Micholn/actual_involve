import React, { useState, useEffect } from "react";
import { Container, Grow, Grid } from "@material-ui/core";
import { useDispatch } from "react-redux";
//import Navbar from "./components/Navbar/Navbar";

//import Posts from "./components/Posts/Posts";
//import Form from "./components/Form/Form";
//import { getPosts } from "./actions/posts";
//import useStyles from "./styles"; 

import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
