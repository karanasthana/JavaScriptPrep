import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from "react-router-dom";
import HomePage from './components/HomePage/HomePage'

function App(){
  return(
    <Router>
      <Route name="HomePage" path="/" component={HomePage}/>
    </Router>
  )
}

export default App;
