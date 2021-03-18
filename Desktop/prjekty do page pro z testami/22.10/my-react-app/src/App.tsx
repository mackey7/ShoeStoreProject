import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePageContainer from './Containers/HomePageContainer/HomePageContainer';
import UserDetailsContainer from './Containers/UserDetailsContainer/UserDetailsContainer';
import PostDetailsContainer from './Containers/PostDetailsContainer/PostDetailsContainer'

const App: React.FC = () => {
  return (
    <Router>
      <div >
        <Route exact path="/" component={HomePageContainer} />
        <Route exact path="/user/:id" component={UserDetailsContainer} />
        <Route exact path="/user/:id/:postId" component={PostDetailsContainer} />
      </div >
    </Router>
  );
}

export default App;
