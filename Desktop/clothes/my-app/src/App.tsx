import React from 'react';
import FirstMenu from './components/FirstMenu/FirstMenu';
import SecondMenu from './components/SecondMenu/SecondMenu';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './containers/Home/Home'
import './App.css'

const App: React.FC = () => {
  return (
    <React.Fragment>
      <FirstMenu />
      <SecondMenu />
      <Router>
        <div className="App">
          <Route exact path="/" component={Home} />

        </div>
      </Router >
    </React.Fragment>
  );
}

export default App;
