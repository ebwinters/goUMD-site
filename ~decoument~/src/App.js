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

const privacyPolicy = () => (
    <div style={{height: '100%', backgroundColor: "#FFD200", color: 'black', fontWeight: 'lighter'}}>
        <h1 style={{paddingTop: '40px', fontWeight: 'lighter'}}>
            Privacy Policy
        </h1>
        <p style={{lineHeight: 2}}>
            goUMD built the goUMD app as a Free app. This SERVICE is provided by goUMD at no cost and is intended for use as is.
            This page is used to inform visitors regarding our policies with the collection, use, and disclosure of Personal Information if anyone decided to use our Service.
            If you choose to use our Service, then you agree to the collection and use of information in relation to this policy. The Personal Information that we collect is used for providing and improving the Service. We will not use or share your information with anyone except as described in this Privacy Policy.
            The terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, which is accessible at goUMD unless otherwise defined in this Privacy Policy.
            Information Collection and Use
            For a better experience, while using our Service, we may require you to provide us with certain personally identifiable information, including but not limited to Location. The information that we request will be retained by us and used as described in this privacy policy.
            The app does use third party services that may collect information used to identify you.
            Link to privacy policy of third party service providers used by the app
            Google Play Services
            Log Data
            We want to inform you that whenever you use our Service, in a case of an error in the app we collect data and information (through third party products) on your phone called Log Data. This Log Data may include information such as your device Internet Protocol (“IP”) address, device name, operating system version, the configuration of the app when utilizing our Service, the time and date of your use of the Service, and other statistics.
            Cookies
            Cookies are files with a small amount of data that are commonly used as anonymous unique identifiers. These are sent to your browser from the websites that you visit and are stored on your device's internal memory.
            This Service does not use these “cookies” explicitly. However, the app may use third party code and libraries that use “cookies” to collect information and improve their services. You have the option to either accept or refuse these cookies and know when a cookie is being sent to your device. If you choose to refuse our cookies, you may not be able to use some portions of this Service.
            Service Providers
            We may employ third-party companies and individuals due to the following reasons:
            To facilitate our Service;
            To provide the Service on our behalf;
            To perform Service-related services; or
            To assist us in analyzing how our Service is used.
            We want to inform users of this Service that these third parties have access to your Personal Information. The reason is to perform the tasks assigned to them on our behalf. However, they are obligated not to disclose or use the information for any other purpose.
            Security
            We value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security.
            Links to Other Sites
            This Service may contain links to other sites. If you click on a third-party link, you will be directed to that site. Note that these external sites are not operated by us. Therefore, we strongly advise you to review the Privacy Policy of these websites. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.
            Children’s Privacy
            These Services do not address anyone under the age of 13. We do not knowingly collect personally identifiable information from children under 13. In the case we discover that a child under 13 has provided us with personal information, we immediately delete this from our servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us so that we will be able to do necessary actions.
            Changes to This Privacy Policy
            We may update our Privacy Policy from time to time. Thus, you are advised to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page. These changes are effective immediately after they are posted on this page.
            Contact Us
            If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at goumd-app@gmail.com
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
          <Link to="/privacyPolicy"><Button style={{marginTop: '15px'}} onClick={() => this.toggle()} className="goButton">Privacy Policy</Button></Link>
          <Link to="/attributions"><Button style={{marginTop: '15px'}} onClick={() => this.toggle()} className="goButton">Attributions</Button></Link>
        </div>
      <Route path="/about" component={About} />
      <Route path="/disclaimer" component={Disclaimer} />
      <Route path="/privacyPolicy" component={privacyPolicy} />
      <Route path="/attributions" component={attributions} />
      </div>
      </Router>
    );
  }
}

export default App;
