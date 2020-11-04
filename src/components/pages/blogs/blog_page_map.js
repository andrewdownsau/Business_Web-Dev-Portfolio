import React from 'react';
import BlogTitleArea from './blog_title_area/blog_title_area';
import Card from '../../general/body_components/card/card.js';
import CategoryIcon from '../../general/body_components/category_icon/category_icon.js';
import BlogCategories from './blog_categories.json';
import Blogs from './blog_archive.json';
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
        <section id="blog_category_area">
          {generate_categories(this.state.category)}
        </section>
        <section id="blog_cards_area">
          {generate_blog_cards(this.state.category)}
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

function generate_blog_cards(category) {
  const blog_card_arr = []
  if(category) {
    for(var index=0; index < Blogs.length; index++){
      if(Blogs[index].category.includes(category)) { 
        blog_card_arr.push( 
          <Card 
            key={"blog_article_card_" + index} 
            id={"blog_article_card_" + index}
            content={Blogs[index]}/>);
      }
    }
  }
  return blog_card_arr;
}