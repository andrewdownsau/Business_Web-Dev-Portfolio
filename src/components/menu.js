import React from 'react';
import './menu.css';
import {Link} from "react-router-dom";


  
export default function render(props) {
  return (
    <header>
      <nav id="top_nav">
        <Link className={set_active(props.page, "home")} onClick={menu_un_collapse} to="/">Home</Link>
        <Link className={set_active(props.page, "about")} onClick={menu_un_collapse} to="/about">About</Link>
        <Link className={set_active(props.page, "skills")} onClick={menu_un_collapse} to="/skills">Skills</Link>
        <Link className={set_active(props.page, "projects")} onClick={menu_un_collapse} to="/projects">Projects</Link>
        <Link className={set_active(props.page, "blog")} onClick={menu_un_collapse} to="/blog">Blog</Link>
        <Link className={set_active(props.page, "contact")} onClick={menu_un_collapse} id="contact_link" to="/contact">Contact</Link>

        <a id="github_link" href="https://github.com/andrewdownsau" target="_blank" rel="noopener noreferrer">
          <img alt="GitHub Link" src={ process.env.PUBLIC_URL + '/images/contact_links/github.svg'}/>
        </a>
        <a id="linkedin_link" href="https://www.linkedin.com/in/andrew-downs-5899727b/" target="_blank" rel="noopener noreferrer">
          <img alt="LinkedIn Link" src={ process.env.PUBLIC_URL + '/images/contact_links/linkedin.svg'}/>
        </a>
        <button type="button" className="icon" onClick={menu_dropdown_up}>
          <i className="fa fa-bars"></i>
        </button>
      </nav>
    </header>
  );
}

function menu_un_collapse() {
  document.getElementById("top_nav").className = "";
}

function menu_dropdown_up() {
  var navigation_menu = document.getElementById("top_nav");
  if (navigation_menu.className === "") {
    navigation_menu.className += "responsive";
  } else {
    navigation_menu.className = "";
  }
}

function set_active(active_page, page){
  if(active_page === page) return "active"
}
