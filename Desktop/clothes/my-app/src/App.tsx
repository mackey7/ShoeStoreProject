import React from 'react';
import FirstMenu from './components/FirstMenu/FirstMenu';
import SecondMenu from './components/SecondMenu/SecondMenu';
import Footer from './components/Footer/Footer'
import Widgets from './components/Widgets/Widgets'
import SocialMediaSection from './components/SocialMediaSection/SocialMediaSection'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './containers/Home/Home'
import Products from './containers/Products/Products'
import About from './containers/About/About'
import Pages from './containers/Pages/Pages'
import './App.css'

const App: React.FC = () => {
  return (
    <React.Fragment>

      <Router>
        <div className="App">

          <FirstMenu />
          <SecondMenu />
          <Route exact path="/" component={Home} />
          <Route exact path="/Home" component={Home} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/about" component={About} />
          <Route exact path="/pages" component={Pages} />
          <Widgets />
          <SocialMediaSection />
          <Footer />



        </div>
      </Router >
    </React.Fragment>
  );
}

export default App;
