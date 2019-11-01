import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';

import Login from './components/login/Login';
import Logout from './components/login/Logout';
import Search from './components/search/Search';
import Chat from './components/chat/Chat';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    sessionStorage.getItem("user") ? setIsLoggedIn(true) : setIsLoggedIn(false);
  });

  const onLogout = () => setIsLoggedIn(false);
  const onLogin = () => setIsLoggedIn(true);

  return (
    <div className="styling">
      <Router>
        <Header isLoggedIn={isLoggedIn}></Header>
        <Switch>
          <Route path="/chat" component={Chat} />
          <Route path="/search" component={Search} />
          <Route path="/logout" render={(props) => <Logout onLogout={onLogout} />} />
          <Route path="/" render={(props) => <Login {...props} onLogin={onLogin} />} />

        </Switch>

        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;