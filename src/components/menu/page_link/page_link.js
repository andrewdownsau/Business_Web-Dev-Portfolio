import React from 'react';
import './page_link.css';
import {NavLink} from "react-router-dom";

export default function render(props){
  const page_link_width = String(100/props.number)+'%';
  const nav_key = "nav_link " + props.page;
  const page_link_id = props.page + "_link"
  const page_link_path = '/' + props.page;
  const page_link_link = (
    <NavLink 
      key={nav_key}
      id={page_link_id}
      className="page_link" 
      style={{ width: page_link_width }} 
      onClick={menu_un_collapse} 
      to={page_link_path} 
    >
      {capitalizeFirstLetter(props.page)}
    </NavLink>
  );
  return(
    page_link_link
  );
}

function menu_un_collapse() {
  document.getElementById("top_nav").className = "";
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}