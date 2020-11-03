import React from 'react';
import './page_link_section.css';
import Pages from '../../../pages.json';
import Externals from '../external_links_section/external_links.json';
import PageLink from './page_link/page_link.js';

export default class PageLinksSection extends React.Component {
  render() {
    const pages_arr = Pages.map((page) =>
      < PageLink 
        key={page + '_link'}
        value={page}
        number={Pages.length} />
    );
    const page_link_section_width = "calc( 100% - " + String(Externals.length*65) + "px )";
    return (
      <section id="page_links" style={{width: page_link_section_width}}>
        {pages_arr}
      </section>
    );
  }
}