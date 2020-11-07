import React from 'react';
import PageText from '../../global/body_components/page_text/page_text';
import PageTitleWithMenu from '../../global/body_components/page_title_with_menu/page_title_with_menu';
import Blogs from './blog_archive.json';
import '../styles/blog_page.css'

export default class BlogPageMapArticle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static getDerivedStateFromProps(props) {
    return {
      index: props.index
    };
  }
  
  
  render() {
    let links_arr = ["none", "none", "./"];
    return (
      <section id={"project_page_content"}>
        <PageTitleWithMenu links_arr={links_arr} title="Blog Article:" />
        <PageText content={Blogs[this.state.index].title} />
        <img
          className= "article_image"
          alt= {Blogs[this.state.index].images[0].alt}
          src= {Blogs[this.state.index].images[0].src} />
        <PageText 
          id="project_page_content_text" 
          content={Blogs[this.state.index].detailed_text} />
      </section>
    );
  }
}


