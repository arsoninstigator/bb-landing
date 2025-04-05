import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-column">
        <h4>Headquarters</h4>
        <p>123 Code Street<br />San Francisco, CA</p>
      </div>
      <div className="footer-column">
        <h4>Privacy Policy</h4>
        <p>We respect your privacy. No data is collected from your snippets.</p>
      </div>
      <div className="footer-column">
        <h4>Contact</h4>
        <p>Email: support@snippetify.com</p>
        <form>
          <input type="email" placeholder="Subscribe to newsletter" />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </footer>
  );
}

export default Footer;
