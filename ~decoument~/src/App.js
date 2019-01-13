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
  <div style={{height: '100%', backgroundColor: '#FFD200', fontWeight: 'lighter'}}>
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
const Disclaimer = () => (
  <div style={{height: '100%', backgroundColor: 'black', color: 'white', fontWeight: 'lighter'}}>
    <h2 style={{paddingTop: '40px', fontWeight: 'lighter'}}>
      "Any reliance you place on such information is therefore strictly at your own risk"
    </h2>
    <p>
The information contained in this website is for general information purposes only. The bus tracking information we display is provided by NextBus and while we endeavour to keep the information up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability or availability with respect to the website and app, or the information, products, services, or related graphics contained on the website or app for any purpose. Any reliance you place on such information is therefore strictly at your own risk.

In no event will we be liable for any loss or damage including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this website/app.

Through this website you are able to link to other websites which are not under the control of goUMD. We have no control over the nature, content and availability of those sites. The inclusion of any links does not necessarily imply a recommendation or endorse the views expressed within them.</p>
  </div>
)

const comingSoon = () => (
    <div style={{height: '100%', backgroundColor: "#FFD200", color: 'black', fontWeight: 'lighter'}}>
        <h1 style={{paddingTop: '40px', fontWeight: 'lighter'}}>
            Android Release Date: 1/14/19
        </h1>
        <h2 style={{paddingTop: '40px', fontWeight: 'lighter'}}>
          New Features:
        </h2>
        <p>
            Reliability - Never worry about missing a bus due to slow load times <br></br> <br></br>
            Full Schedule - See the full bus schedule for any route and any stop you want <br></br> <br></br>
            Commuter Route Support - GoUMD will support all campus and commuter bus routes <br></br> <br></br>
            New UI - A brand new user interface that's sleek, responsive, and informative <br></br> <br></br>
        </p>
    </div>
)

const attributions = () => (
    <div style={{height: '100%', backgroundColor: 'black', color: 'white', fontWeight: 'lighter'}}>
        <h1 style={{paddingTop: '40px', fontWeight: 'lighter'}}>
            Attributions & Creative Commons Credits
        </h1>
        <h2 style={{paddingTop: '20px', fontWeight: 'lighter'}}>
          Bus Icon
        </h2>
        <p>
            The bus icon used in the maps feature was taken from Eucalyp Studio on iconfinder.com. I adaped the logo to add color. <br></br>
        All credit for this icon logo goes to Eucalyp Studio. The creative commons license can be found <a style={{color: 'white'}} href="https://creativecommons.org/licenses/by/3.0/"> here. </a>
        </p>
        <h2 style={{paddingTop: '20px', fontWeight: 'lighter'}}>
          Stop Icon
        </h2>
        <p>
            The stop icon used in the maps feature was taken from Stefan Taubert on iconfinder.com. I dit not adapt the logo in any way. <br></br>
        All credit for this icon logo goes to Stefan Taubert. The creative commons license can be found <a style={{color: 'white'}} href="https://creativecommons.org/licenses/by/3.0/"> here. </a>
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
          Pick your destination. Get the fastest route. Go.
        </h2>
        <div style={{display: 'inline'}}>
          <Link to="/about"><Button onClick={() => this.toggle()} className="goButton">Motivation</Button></Link>
          <Link to="/disclaimer"><Button onClick={() => this.toggle()} className="goButton">Disclaimer</Button></Link>
          <a href="https://itunes.apple.com/us/app/goumd/id1414933374?ls=1&mt=8" target="_blank"><Button style={{marginTop: '15px'}} className="goButton">App Store</Button></a>
          <Link to="/comingSoon"><Button style={{marginTop: '15px'}} onClick={() => this.toggle()} className="goButton">New Features</Button></Link>
          <Link to="/attributions"><Button style={{marginTop: '15px'}} onClick={() => this.toggle()} className="goButton">Attributions</Button></Link>
        </div>
      <Route path="/about" component={About} />
      <Route path="/disclaimer" component={Disclaimer} />
      <Route path="/comingSoon" component={comingSoon} />
      <Route path="/attributions" component={attributions} />
      </div>
      </Router>
    );
  }
}

export default App;
