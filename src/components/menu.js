import React from 'react';
import './menu.css';

class Menu extends React.Component {
  
  render() {
    return (
      <header>
        <nav id="top_nav">
          <a href="./" className="active" >Home</a>
          <a href="./">About</a>
          <a href="./">Skills</a>
          <a href="./">Projects</a>
          <a href="./">Blog</a>
          <a id="contact_link" href="./">Contact</a>
          <a id="github_link" href="https://github.com/andrewdownsau" target="_blank" rel="noopener noreferrer">
              <img alt="GitHub Link" src={ process.env.PUBLIC_URL + '/images/contact_links/github.svg'}/>
          </a>
          <a id="linkedin_link" href="https://www.linkedin.com/in/andrew-downs-5899727b/" target="_blank" rel="noopener noreferrer">
              <img alt="LinkedIn Link" src={ process.env.PUBLIC_URL + '/images/contact_links/linkedin.svg'}/>
          </a>
          <button type="button" className="icon" onClick={menu_dropdown}>
            <i className="fa fa-bars"></i>
          </button>
        </nav>
      </header>
    );
  }
}

function menu_dropdown() {
  var x = document.getElementById("top_nav");
  if (x.className === "") {
    x.className += "responsive";
  } else {
    x.className = "";
  }
}

export default Menu;