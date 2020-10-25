import React from 'react';
import Externals from './external_links.json'
import ExternalLink from './external_link/external_link.js'

export default class ExternalLinksSection extends React.Component {
  render() {
    const externals_arr = Externals.map((external) =>
      < ExternalLink 
        key={external.id}
        value={external}
        number={Externals.length} />
    );
    return (
      <section key="external_links" id="external_links">
        {externals_arr}
      </section>
    );
  }
}