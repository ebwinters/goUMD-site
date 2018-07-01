import React, { Component } from 'react';
import logo from './logo.svg';
import logo3 from './logo3.png';
import './App.css';
import {Button} from './components/goUMDButton';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

const About = () => (
  <div style={{height: '400px', backgroundColor: '#FFD200'}}>
    <h2>About</h2>
  </div>
)

class App extends Component {
  render() {
    return (
      <Router>     
      <div className="App">
        <img src={logo3} style={{height: '400px'}}/>
        <h2 style={{fontSize: '30px', fontWeight: 'lighter', paddingBottom: '15px'}}>
          Pick your destination. Get the fastest route. Enjoy the ride.
        </h2>
        <div style={{display: 'inline'}}>
          <Link to="/about"><Button className="goButton">Learn More</Button></Link>
          <a href="https://itunes.apple.com/us/genre/ios/id36?mt=8" target="_blank"><Button className="goButton">App Store</Button></a>
        </div>
      <Route path="/about" component={About} />
      </div>
      </Router>
    );
  }
}

export default App;
