import React from 'react';
import PageTitle from '../../body_components/page_title/page_title.js';
import CategoryIcon from '../../body_components/category_icon/category_icon.js';
import BlogCategories from './blog_categories.json'
import { Link } from 'react-router-dom';
import './blog_page.css'

export default class BlogMapSubPage extends React.Component {
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
        <section id="blog_title_area">
          <PageTitle content="Blog Archive" />
          <nav id="map_list_switch" className="switch">
            <Link className="slider active" to={"/blog/map"}>Map </Link>
            <Link className="slider" to={"/blog/list"} >List</Link>
            <Link className="slider_sm active" to={"/blog/map"}>M </Link>
            <Link className="slider_sm" to={"/blog/list"}>L</Link>
          </nav>
        </section>
        <section id="blog_body_area_11111">
          {generate_categories(this.state.category)}
        </section>
      </section>
    );
  }
}

function generate_categories(category) {
  const category_arr = []
  for(var index=0; index < BlogCategories.length; index++){
    let style_state = "small"
    if(BlogCategories[index].category_title === category) {style_state += " active_icon"}
    category_arr.push(< CategoryIcon key={BlogCategories[index].category_title} content={BlogCategories[index]} style_state={style_state} />)
  }
  return category_arr;
}


// function generate_blog_cards() {
//   const blog_card_arr = []
//   // for(var index=0; index < BlogCategories.length; index++){
//   //   category_arr.push(< CategoryIcon content={BlogCategories[index]} onClick={generate_blog_cards()}/>)
//   // }
//   return blog_card_arr;
// }