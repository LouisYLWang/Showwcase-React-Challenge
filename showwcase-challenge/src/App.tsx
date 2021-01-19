import React from "react";
import { HelloPage } from "./components/pages/HelloPage";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { EduPage } from "./components/pages/EduPage";

function App() {
  return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path='/' component={HelloPage}/>
            <Route exact path='/education' component={EduPage}/>
          </Switch>
        </div>
      </Router>
  );
}

export default App;
