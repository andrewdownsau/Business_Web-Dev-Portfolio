import React from 'react';
import BlogTitleArea from './blog_title_area/blog_title_area';
import CategoryIcon from '../../general/body_components/category_icon/category_icon.js';
import BlogCategories from './blog_categories.json';
import './blog_page.css'

export default class BlogPageMap extends React.Component {
  render() {
    return (
      <section id={"blog_page_content"}>
        <BlogTitleArea mode="map"/>
        <section id="blog_body_area">
          {generate_categories()}
        </section>
      </section>
    );
  }
}

function generate_categories() {
  const category_arr = []
  for(var index=0; index < BlogCategories.length; index++){
    category_arr.push(< CategoryIcon key={BlogCategories[index].category_title} content={BlogCategories[index]} />)
  }
  return category_arr;
}