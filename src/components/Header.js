import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo">Snippetify</div>
        <nav>
          <ul className="nav-links">
            <li>Home</li>
            <li className="dropdown">
              Features
              <ul className="dropdown-menu">
                <li>Save Snippets</li>
                <li>Organize Easily</li>
              </ul>
            </li>
            <li>Testimonials</li>
            <li>Contact</li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
