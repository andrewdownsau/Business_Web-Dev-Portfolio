import React from 'react';
import './menu_option.css';
import {NavLink} from "react-router-dom";

export default function render(props){
  const option_width = String(100/props.number)+'%';
  const nav_key = "nav_link " + props.page;
  const option_path = '/' + props.page.toLowerCase();
  const option_link = (
    <NavLink 
      key={nav_key} 
      className="menu_option" 
      style={{ width: option_width }} 
      onClick={menu_un_collapse} 
      to={option_path} 
    >
      {props.page}
    </NavLink>
  );
  return(
    option_link
  );
}

function menu_un_collapse() {
  document.getElementById("top_nav").className = "";
}