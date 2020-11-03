import React from 'react';
import BlogTitleArea from '../../body_components/blog_title_area/blog_title_area.js';
import './blog_page.css'

export default class BlogPageList extends React.Component {
  render() {
    return (
      <section id={"blog_page_content"}>
        <BlogTitleArea mode="list"/>
      </section>
    );
  }
}
