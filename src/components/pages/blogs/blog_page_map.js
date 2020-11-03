import React from 'react';
import BlogTitleArea from './blog_title_area/blog_title_area';
import CategoryIcon from '../../general/body_components/category_icon/category_icon.js';
import BlogCategories from './blog_categories.json';
import '../styles/blog_page.css'

export default class BlogPageMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {category: ""};
  }

  static getDerivedStateFromProps(props) {
    return {
      category: props.index
    };
  }
  
  render() {
    return (
      <section id={"blog_page_content"}>
        <BlogTitleArea mode="map"/>
        <section id="blog_body_area">
          {generate_categories(this.state.category)}
        </section>
      </section>
    );
  }
}

function generate_categories(category) {
  const category_arr = []
  for(var index=0; index < BlogCategories.length; index++){
    let style_state = "";
    if(category) {
      style_state = "small";
      if(BlogCategories[index].category_title === category) {style_state += " active_icon"}
    }
    category_arr.push(
    < CategoryIcon 
      key={BlogCategories[index].category_title} 
      content={BlogCategories[index]} 
      style_state={style_state} />);
  }
  return category_arr;
}