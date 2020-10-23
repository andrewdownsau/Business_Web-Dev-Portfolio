import React from 'react';
import './menu.css';
import MenuOption from './menu_option/menu_option.js'
import menu_options from './menu_options.json'


  
export default function render(props) {
  return (
    <header>
      <nav id="top_nav">
        {render_menu_options(props.page)}
        {/* <Link className={set_active(props.page, "home")} onClick={menu_un_collapse} to="/">Home</Link>
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
        </button> */}
      </nav>
    </header>
  );
}

function render_menu_options(active_page) {
  const options = []
  for (var index=0; index < menu_options.length; index++) {
    options.push(<MenuOption page={menu_options[index]} active={active_page} />)
  }
  return (
    options
  );
}


// function menu_dropdown_up() {
//   var navigation_menu = document.getElementById("top_nav");
//   if (navigation_menu.className === "") {
//     navigation_menu.className += "responsive";
//   } else {
//     navigation_menu.className = "";
//   }
// }

