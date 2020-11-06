import React from 'react';
import PageText from '../../global/body_components/page_text/page_text';
import PageTitleWithMenu from '../../global/body_components/page_title_with_menu/page_title_with_menu';
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
    let links_arr = ["none", "none", "/projects"];
    if(this.state.index > 0) { 
      links_arr[0] = "/projects/" + Projects[this.state.index-1].title.replace(/\s/g, '_'); 
    }
    if(this.state.index < Projects.length-1) { 
      links_arr[1] = "/projects/" + Projects[this.state.index+1].title.replace(/\s/g, '_'); 
    }
    return (
      <section id={"project_page_content"}>
        <PageTitleWithMenu links_arr={links_arr} title="Personal Project:" />
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

