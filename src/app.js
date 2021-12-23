import React from "react";
import "./index.css"

//import {useHistory } from 'react-router-dom';
import {
    BrowserRouter as Router,
    //Redirect,
    Switch,
    Route,
  } from "react-router-dom";
  import Sports from "./Sports";
  import Picture from "./Picture"

function App(){
    // const history = useHistory();
    // function handleclicksportsandgames(){
    // history.push("/sports");
    // }
    return (
        <>
        <Picture />
        <Router>
        <Switch>
            <Route path="/sports" exact>
              <Sports  />
            </Route>
            </Switch>
        </Router>
        </>
    );
}


export default App;