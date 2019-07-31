import React from 'react';
import FirstMenu from './components/FirstMenu/FirstMenu';
import SecondMenu from './components/SecondMenu/SecondMenu';
import Footer from './components/Footer/Footer'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './containers/Home/Home'
import './App.css'

const App: React.FC = () => {
  return (
    <React.Fragment>

      <Router>
        <div className="App">

          <FirstMenu />
          <SecondMenu />
          <Route exact path="/" component={Home} />
          <Footer />



        </div>
      </Router >
    </React.Fragment>
  );
}

export default App;
