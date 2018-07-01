import React, { Component } from 'react';
import logo from './logo.svg';
import logo3 from './logo3.png';
import './App.css';
import {Button} from './components/goUMDButton';
import {
  withRouter,
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

const About = () => (
  <div style={{height: '600px', backgroundColor: '#FFD200', fontWeight: 'lighter'}}>
    <h2 style={{paddingTop: '40px', fontWeight: 'lighter'}}>
      We thought the current situation was... lacking
    </h2>
    <p>Any reference regarding where a certain route makes stops</p>
    <p>The ability to advise bus route selection based on metrics such as <b>ETA</b> or <b>walking distance</b></p>
    <p>A clean interface that people can <b>comfortably</b> navigate</p>
    <p>A <b>no-stress</b> experience</p>
    <p style={{paddingTop: '20px', lineHeight: '36px'}}>
      goUMD provides a simplistic bus selection experience. All that the user has to provide <br/> is their destination, and
      our algorithm returns the most efficient UMD bus options <br/> <b>ordered by shortest walking distance</b> necessary, along with <b>ETA</b>
    </p>


  </div>
)

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1
    }
  }
  toggle = () => {
    this.state.page = this.state.page + 1;
  }
  render() {
    return (
      <Router>     
      <div className="App">
        <img src={logo3} style={{height: '400px'}}/>
        <h2 style={{fontSize: '30px', fontWeight: 'lighter', paddingBottom: '15px'}}>
          Pick your destination. Get the fastest route. Enjoy the ride.
        </h2>
        <div style={{display: 'inline'}}>
          <Link to="/about"><Button onClick={() => this.toggle()} className="goButton">Motivation</Button></Link>
          <a href="https://itunes.apple.com/us/genre/ios/id36?mt=8" target="_blank"><Button className="goButton">App Store</Button></a>
        </div>
      <Route path="/about" component={About} />
      </div>
      </Router>
    );
  }
}

export default App;
