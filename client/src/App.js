import React, { useState, useEffect }from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navigation from './features/Navigation';
import Home from './features/Home';
import Announcements from './features/Announcements/Announcements';
import Drinks from './features/Drinks/Drinks';
import Foods from './features/Food/Foods';
import Gallery from './features/Images/Gallery';
import Footer from './features/Footer';
import Login from './features/Login';

const App = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch('/hello')
    .then(res => res.json())
    .then(data => setCount(data.count));
  }, [])


  return (
    <BrowserRouter>
      <div className="App">
        <Navigation />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/announcements">
            <Announcements />
          </Route>
          <Route exact path="/drinks">
            <Drinks />
          </Route>
          <Route exact path="/food">
            <Foods />
          </Route>
          <Route exact path="/gallery">
            <Gallery />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App