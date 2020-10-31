import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Gallery from './components/Gallery';
import Login from './components/Login';
import Register from "./components/Register";

function App(props) {
  return (
    <Router>
      <React.Fragment>
        <Route path ="/" exact component = {Gallery}>
        <Redirect to="/login" />
        </Route>
        <Route path="/login" component={Login}/>
        <Route exact path="/register" component={Register} />

      </React.Fragment>
    </Router>
  );
}

export default App;

