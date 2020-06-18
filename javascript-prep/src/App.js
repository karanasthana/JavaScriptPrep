import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
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
