import React from 'react';
import './menu_option.css';
import {Link} from "react-router-dom";

export default function render(props){
  const option_link = (
    <Link className={set_active(props)} onClick={menu_un_collapse} to="/">{props.page}</Link>
  );
  return(
    option_link
  );
}


function set_active(props){
  if(props.active === props.page){
    return "menu_option active"
  }
  else{
    return "menu_option"
  }
}

function menu_un_collapse() {
  document.getElementById("top_nav").className = "";
}