import React, { Component } from "react";
import { ThemeProvider } from "styled-components";
import { HelloPage } from "./components/pages/HelloPage";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import theme from "./theme";
import { EduPage } from "./components/pages/EduPage";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="App">
          <Switch>
            <Route exact path='/' component={HelloPage}/>
            <Route exact path='/education' component={EduPage}/>
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
