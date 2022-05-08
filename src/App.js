import React from 'react';
//import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from './components/NavigationBar';
import { Home } from './Home';
import { About } from './Two';
import { NoMatch } from './Three';
import { Four } from './Four';

function App() {
  return (
    <React.Fragment>
      <Router>
        <NavigationBar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Two" component={About} />
          <Route path="/Three" component={NoMatch} />
          <Route path="/Four" component={Four} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
