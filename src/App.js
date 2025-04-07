import React from 'react';
import list from './assets/demo.png';
import myVideo from './assets/videos/browserbuddy-demo.mp4';
import Logo from "./assets/snippetify.png"


function App() {
  return (
    <div>
      <header className="header">
        <div className="logo">
          <img src={Logo} />
        </div>
        <nav className="nav">
          <div className="dropdown">
            <button className="dropbtn">Features</button>
            <div className="dropdown-content">
              <a href="#feature1">easy-to-use</a>
              <a href="#feature2">no login or special perms</a>
              <a href="#feature3">edits saved upon refresh</a>
            </div>
          </div>
          <div className="dropdown">
            <button className="dropbtn">about</button>
            <div className="dropdown-content">
              <a href="#mission">our mission</a>
              <a href="#team">team</a>
            </div>
          </div>
          <div className="dropdown">
            <button className="dropbtn">support</button>
            <div className="dropdown-content">
              <a href="#faq">faq</a>
              <a href="#contact">contact us</a>
            </div>
          </div>
        </nav>
      </header>

      <section className="two-column">
        <div>
          <h2>snippetify - save your notes instantly!</h2>
          <p>snippetify is a productivity and research tool in the form of a minimalistic chrome browser extension that lets you highlight <a>text on webpages with pastel colors</a> and locally <b>save snippets</b> of exactly what you highlighted with links for future reference. <br /> <br />
          the portion highlighted automatically gets saved locally so when you open up the <a>extension preview</a>, you can find a <b>cumulative list of the things you've highlighted</b> using that browser with a hyperlink back to the original websites.
          </p>
        </div>
        
      <video autoPlay muted loop id="video">
        <source src={myVideo} type="video/mp4" />
    </video>

      </section>

      <section className="two-column">
        <img src={list} alt="Organize your snippets" />
        <div>
          <h2>how it works + more</h2>
          <p> open any web page, select the text you want to highlight, right click and click the "save snippet" option that shows up. voila! your snippet has been saved. it can be accessed upon clicking the extension icon to select snippetify. <br />
          <br/>
          <b>features include</b>
            <ul>
              <li>sleek interface + nice minimalistic ui + multi pastel highlighter colors.</li>
              <li>the highlighted portion doesn't get erased if you refresh and if you reopen the website at a later date. it's so that you can quickly identify the portion you need to refer to at a glance.</li>
              <li>in the list of saved notes, you can also edit the 'heading' of each individual snippet to describe it in your own words so that when you reopen the list at some other time, you can quickly navigate and brush up on what each snippet contains.</li>
            </ul>
            <b>user data policy</b> <br />
            there's absolutely no need for any installations, creation of an account or any special permissions to access the user data (which we do not collect).</p>
        </div>
      </section>

      <section className="testimonials">
        <h2>what our users have been saying ..</h2>
        <div className="testimonial-slider">
          <div className="testimonial">"Snippetify changed the way I work!"</div>
          <div className="testimonial">"Fast, simple, and super useful."</div>
          <div className="testimonial">"A must-have for all students."</div>
        </div>
      </section>

      <section className="cta">
        <h2>are you ready to take the next step?</h2>
        <button>add to chrome NOW</button>
      </section>

      <footer className="footer">
        <div>
          <h4>this project was made for hack club's browser buddy and rpg v1 program :D</h4>
          <p>123 Code Street<br />San Francisco, CA 94102</p>
        </div>
        <div>
          <h4>Privacy</h4>
          <p>Read our <a href="#">Privacy Policy</a> and <a href="#">Terms of Service</a>.<br /><br />
          feel free to send us a donation via ko-fi :D
          </p>
        </div>
        <div>
          <h4>contact us</h4>
          <p>email: arsoninstigator@proton.me</p>
          <form>
            <input type="email" placeholder="Subscribe to newsletter" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </footer>
    </div>
  );
}

export default App;
