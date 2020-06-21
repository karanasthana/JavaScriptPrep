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
        <Route path={"/JavaScriptPrep/topic/:id"} name="Topic" component={Topic}/>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
