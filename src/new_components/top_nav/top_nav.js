import React from 'react';
import './top_nav.css';
import PageLinksSection from './page_links_section/page_links_section.js';
import ExternalLinksSection from './external_links_section/external_links_section.js';

export default class TopNav extends React.Component {

  render() {
    return (
      <header>
        <nav id="top_nav">
          <PageLinksSection />
          <ExternalLinksSection />
          <button type="button" className="icon" onClick={menu_dropdown_up}>
            <i className="fa fa-bars"></i>
          </button>
        </nav>
      </header>
    );
  }
}

function menu_dropdown_up() {
  var navigation_menu = document.getElementById("top_nav");
  if (navigation_menu.className === "") {
    navigation_menu.className += "responsive";
  } ;
  else {
    navigation_menu.className = "";
  }
}