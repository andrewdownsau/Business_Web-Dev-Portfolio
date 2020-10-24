import React from 'react';
import './menu.css';
import PageLink from './page_link/page_link.js';
import page_links from './page_link/page_links.json';
import ExternalLink from './external_link/external_link.js';
import external_links from './external_link/external_links.json';


  
export default function render(props) {
  const external_links_width = String(external_links.length * 65)
  return (
    <header>
      <nav id="top_nav">
        <section id="page_links" style={{width: 'calc(100% - ' + external_links_width + 'px)'}}>
          {render_page_links(props.page)}
          <button type="button" className="icon" onClick={menu_dropdown_up}>
            <i className="fa fa-bars"></i>
          </button>
        </section>
        <section id="external_links">
          {render_external_links()}
        </section>
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

function menu_dropdown_up() {
  var navigation_menu = document.getElementById("top_nav");
  if (navigation_menu.className === "") {
    navigation_menu.className += "responsive";
  } else {
    navigation_menu.className = "";
  }
}

