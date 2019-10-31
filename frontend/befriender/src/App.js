import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';

import Login from './components/login/Login';
import Search from './components/search/Search';
import Chat from './components/chat/Chat';

function App() {
  return (
  <div className="styling">
    <Router>
      <Header></Header>
      <Switch> 
        <Route path="/chat" component={Chat}/>
        <Route path="/search" component={Search}/>
        <Route path="/" component={Login}/>
        
      </Switch>
      
      <Footer></Footer>
    </Router>
  </div>
);
}

export default App;

