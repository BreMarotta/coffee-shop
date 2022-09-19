import React, { useState, useEffect }from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navigation from './features/Navigation';

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
          <Route path="/testing">
            <h1>Test Route</h1>
          </Route>
          <Route path="/">
            <h1>Page Count: {count}</h1>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App