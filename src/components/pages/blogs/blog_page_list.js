import React from 'react';
import PageTitle from '../../body_components/page_title/page_title.js';
import { Link } from 'react-router-dom';
import './blog_page.css'

export default class BlogPageList extends React.Component {
  render() {
    return (
      <section id={"blog_page_content"}>
        <section id="blog_title_area">
          <PageTitle content="Blog Archive" />
          <nav id="map_list_switch" className="switch">
            <Link className="slider" to={"/blog/map"}>Map </Link>
            <Link className="slider active" to={"/blog/list"} >List</Link>
            <Link className="slider_sm" to={"/blog/map"}>M </Link>
            <Link className="slider_sm active" to={"/blog/list"}>L</Link>
          </nav>
        </section>
      </section>
    );
  }
}
