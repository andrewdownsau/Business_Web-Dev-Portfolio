import React from 'react';
import { Link } from 'react-router-dom';
import './category_icon.css';

export default class CategoryIcon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {className: "category_icon"};
  }

  static getDerivedStateFromProps(props) {
    return {
      content: props.content,
      style_state: props.style_state
    };
  }

  render() {
    // const blog_link_id = this.state.content.category_title;
    return (
      <section className={this.state.className + " " + this.state.style_state} >
        <Link id={this.state.content.category_title} to={"/blog/map/" + this.state.content.category_title}>
          <i className={this.state.content.category_icon_class + " category_icon_icon"}></i>
          <h3 className="category_icon_title">{capitalizeFirstLetter(this.state.content.category_title)}</h3>
        </Link>
      </section>
    );
  }
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}


