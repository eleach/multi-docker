import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import OtherPage from './OtherPage';
import Fib from './Fib';

class App extends Component {
  render() {
    return (
      <Router>
        <div >
          <header >
            <br />
            <Link to="/">Home</Link>
            <br />
            <Link to="/otherpage">Other Page</Link>
          </header>
          <div>
            <br /> 
            <Route exact path="/" component={Fib} />
            <br /> 
            <br /> 
            <Route path="/Otherpage" component={OtherPage} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;