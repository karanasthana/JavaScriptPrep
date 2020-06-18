import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from "react-router-dom";
import HomePage from './components/HomePage/HomePage'
import Topic from './components/DetailPage/DetailPage'

function App(){
  return(
    <Router>
      <Switch>
        <Route name="HomePage" exact path="/" component={HomePage}/>
        <Route name="Topic" path="/topic" component={Topic}/>
      </Switch>
    </Router>
  )
}

export default App;
