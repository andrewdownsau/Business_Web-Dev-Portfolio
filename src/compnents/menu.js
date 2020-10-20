import React from 'react';
import './menu.css';

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {  }
  componentWillUnmount() {  }
  render() {
    return (
      <header>
        <section id="header_left">
            <nav className="desktop_nav">
                <a href="./">Home</a>
                <a href="./">About</a>
                <a href="./">Skills</a>
                <a href="./">Projects</a>
                <a href="./">Blog</a>
                <a href="./">Contact</a>
            </nav>
        </section>
        <section id="header_right">
            <a href="https://github.com/andrewdownsau" target="_blank" rel="noopener noreferrer">
                <img id="github-link" alt="GitHub Link" src={require('./images/contact_links/github.svg')}/>
            </a>
            <a href="https://www.linkedin.com/in/andrew-downs-5899727b/" target="_blank" rel="noopener noreferrer">
                <img id="linkedin-link" alt="LinkedIn Link" src={require('./images/contact_links/linkedin.svg')}/>
            </a>
        </section>
    </header>
    );
  }
}

export default Menu;