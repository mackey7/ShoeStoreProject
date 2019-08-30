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
import Blog from './containers/Blog/Blog'
import Support from './containers/Support/Support'
import Terms from './containers/Terms/Terms'
import Faq from './containers/Faq/Faq'
import Contact from './containers/Contact/Contact'
import LoginPage from './containers/LoginPage/LoginPage'
import RegisterPage from './containers//RegisterPage/RegisterPage'
import ArticlePage from './containers/ArticlePage/ArticlePage'
import ProductPage from './containers/ProductPage/ProductPage'
import CartPage from './containers/CartPage/CartPage'
import FavouritePage from './containers/FavouritePage/FavouritePage'
import BestSellers from './containers/BestSellers/BestSellers'
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
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/support" component={Support} />
          <Route exact path="/faqs" component={Faq} />
          <Route exact path="/terms" component={Terms} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/register" component={RegisterPage} />
          <Route exact path="/blog/article/:id" component={ArticlePage} />
          <Route exact path="/product/:id" component={ProductPage} />
          <Route exact path="/cart" component={CartPage} />
          <Route exact path="/favourite" component={FavouritePage} />
          <Route exact path="/bestSellers" component={BestSellers} />
          <Widgets />
          <SocialMediaSection />
          <Footer />



        </div>
      </Router >
    </React.Fragment>
  );
}

export default App;
