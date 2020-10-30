import React from 'react';
import PageTitle from '../../body_components/page_title/page_title.js';
import './blog_page.css'

export default class BlogPage extends React.Component {
  render() {
    return (
      <section id={"blog_page_content"}>
        <section id="blog_title_area">
          <PageTitle content="Blog Archive" />
          <nav id="map_list_switch" className="switch">
            <span class="slider active">Map </span>
            <span class="slider">List</span>
            <span class="slider_sm active">M </span>
            <span class="slider_sm">L</span>
          </nav>
        </section>
      </section>
    );
  }
}