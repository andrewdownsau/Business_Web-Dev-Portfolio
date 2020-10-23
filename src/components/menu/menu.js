import React from 'react';
import './menu.css';
import PageLink from './page_link/page_link.js';
import page_links from './page_links.json';
import ExternalLink from './external_link/external_link.js';
import external_links from './external_links.json';


  
export default function render(props) {
  const external_links_width = String(external_links.length * 60)
  return (
    <header>
      <nav id="top_nav">
        <section id="page_links" style={{width: 'calc(100% - ' + external_links_width + 'px)'}}>
          {render_page_links(props.page)}
        </section>
        <section id="external_links">
          {render_external_links()}
        </section>
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

function render_page_links(active_page) {
  const page_links_arr = []
  const number_of_page_links = page_links.length;
  for (var index=0; index < number_of_page_links; index++) {
    page_links_arr.push(<PageLink page={page_links[index]} active={active_page} number={number_of_page_links} />)
  }
  return (
    page_links_arr
  );
}

function render_external_links() {
  const external_links_arr = [];
  const number_of_external_links = external_links.length;
  for (var index=0; index < number_of_external_links; index++) {
    external_links_arr.push(<ExternalLink external_link={external_links[index]} number={number_of_external_links} />)
  }
  return (
    external_links_arr
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

