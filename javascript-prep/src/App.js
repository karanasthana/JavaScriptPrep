import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from "react-router-dom";
import HomePage from './components/HomePage/HomePage'
import JavaScriptComp from './components/DetailPage/DetailPage'
import ReactJSComp from './components/DetailPage/DetailPage'
import ReactNativeComp from './components/DetailPage/DetailPage'
import ReduxComp from './components/DetailPage/DetailPage'

function App(){
  return(
    <Router>
      <Route name="HomePage" path="/" component={HomePage}/>
      <Route name="JavaScriptComp" path="/javacript" component={JavaScriptComp}/>
      <Route name="ReactJSComp" path="/react" component={ReactJSComp}/>
      <Route name="ReactNativeComp" path="/react-native" component={ReactNativeComp}/>
      <Route name="ReduxComp" path="/redux" component={ReduxComp}/>
    </Router>
  )
}

export default App;
