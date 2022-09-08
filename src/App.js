import React from 'react';
import { ReactComponent as IconFacebook } from './assets/icons/facebook.svg';
import { ReactComponent as IconTwitter } from './assets/icons/twitter.svg';
import { ReactComponent as IconLinkedIn } from './assets/icons/linkedin.svg';
import { ReactComponent as IconLogo } from './assets/icons/logo_with_name.svg';
import "./App.css";

class App extends React.Component {
  render = () => {
    return (
      <div className="card">
        <div className="header">
          <div className="logo">
            <a target="_blank" rel="noopener noreferrer">
              <IconLogo className="icon" />
            </a>
          </div>
          <div className="social">
            <a href="https://www.linkedin.com/company/hangar-direct/" title="LinkedIn" target="_blank" rel="noopener noreferrer">
              <IconLinkedIn className="icon" />
            </a>
            <a href="https://www.facebook.com/people/Hangar-Direct/100085554487814/" title="Facebook" target="_blank" rel="noopener noreferrer">
              <IconFacebook className="icon" />
            </a>
            <a href="https://twitter.com/HangarDirect" title="Twitter" target="_blank" rel="noopener noreferrer">
              <IconTwitter className="icon" />
            </a>
          </div>
        </div>
        <div className="content">
          <div className="title-holder">
            <h1>We are in stealth mode</h1>
            <p>Please check back soon or shoot us an email if you're curious what we're up to.</p>
          </div>
          <a href="mailto:tanner@hangardirect.com">
            <div className="cta">Send us an email</div>
          </a>
        </div>
        <div className="footer">
        </div>
      </div>
    );
  }
}

export default App;