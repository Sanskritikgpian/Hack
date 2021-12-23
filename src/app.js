import React from "react";
import "./index.css"
import "./App.css"
//import {useHistory } from 'react-router-dom';
import {
    BrowserRouter as Router,
    Redirect,
    Switch,
    Route,
  } from "react-router-dom";
  import Sports from "./Sports";
import Picture from "./Picture";


function App(){
    // const history = useHistory();
    // function handleclicksportsandgames(){
    // history.push("/sports");
    // }
    return (
        <>
        
        {/* <h1>This is aryan</h1> */}
        <Router>
        <Switch>
            
            <Route path="/Sports" exact>
                <Sports  />
            </Route>
            <Route path="/" exact>
                <Picture  />
            </Route>
            <Redirect to="/" />   
        </Switch>
        </Router>
        </>
    );
}


export default App;