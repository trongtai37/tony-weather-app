import React from 'react';
import { FontAwesomeIcon }from '@fortawesome/react-fontawesome';

const Footer = () => {
  return (
    <footer>
      <p className="thank-you">Thank you!</p>
      <p>I build this project just for fun and practice, I'm preciate for visiting and testing!</p>
      <ul className="social-icons">
        <li>
          <a href="https://facebook.com/tai.nguyentrong.0607" target="_blank" title="Follow my Facebook">
            <FontAwesomeIcon icon={['fab', 'facebook-square']} size="2x"/>            
          </a>
        </li>
        <li>
          <a href="https://github.com/trongtai37" target="_blank" title="Github Project">
            <FontAwesomeIcon icon={['fab', 'github']} size="2x"/>
          </a>
        </li>
        <li>
          <a href="https://messenger.com/tai.nguyentrong.0607" target="_blank" title="Chat on Messenger">
            <FontAwesomeIcon icon={['fab', 'facebook-messenger']} size="2x"/>
          </a>
        </li>
        <li>
          <a href="https://twitter.com/trongtai37" target="_blank" title="Follow my Twitter">
            <FontAwesomeIcon icon={['fab', 'twitter']} size="2x"/>
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;