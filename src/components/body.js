import React from 'react';
import './body.css';

class Body extends React.Component {
  
  render() {
    return (
      <section id="body_section">

        <section id="title_area">
          <h1 id="page_title">Andrew Downs - Web Developer</h1>
        </section>

        <section id="main_content">
          <p>Welcome to my portfolio website</p>
          <p>Feel free to explore the navigation menu to learn more</p>
          <img id="title_image" alt="Sitting at a tree" src={require('./images/body/title_image2.svg')}/>
        </section>

      </section>
    );
  }
}

export default Body;