import React from 'react';
import PageTitle from '../../general/body_components/page_title/page_title.js';
import PageText from '../../general/body_components/page_text/page_text.js';
import Projects from './projects.json';
import '../styles/project_page.css';

export default class ProjectPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0
    };
  }

  static getDerivedStateFromProps(props) {
    return {
      index: props.index
    };
  }
  
  render() {
    return (
      <section id={"project_page_content"}>
        <PageTitle content="Personal Project:" />
        <PageText content={Projects[this.state.index].title} />
        <img
          className= "article_image"
          alt= {Projects[this.state.index].images[0].alt}
          src= {Projects[this.state.index].images[0].src} />
        <PageText 
          id="project_page_content_text" 
          content={Projects[this.state.index].detailed_text} />
      </section>
    );
  }
}

