import React from 'react';
import './page_link.css';
import {NavLink} from "react-router-dom";

export default class PageLink extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      className: "page_link",
      onClick: menu_un_collapse
    };
  }

  static getDerivedStateFromProps(props) {
    return { 
      page_link: props.value,
      innerHTML: capitalizeFirstLetter(props.value),
      key: props.value + "_page_link",
      id: props.value + "_page_link",
      style: {width: String(100/(props.number))+'%'},
      path: '/' + props.value
    };
  }

  render() {
    return (
      <NavLink 
        key={this.state.key}
        id={this.state.id}
        className={this.state.className} 
        style={this.state.style} 
        onClick={this.state.onClick} 
        to={this.state.path} 
      >
        {this.state.innerHTML}
      </NavLink>
    );
  }
}

function menu_un_collapse() {
  document.getElementById("top_nav").className = "";
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}