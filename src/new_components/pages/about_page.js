import React from 'react';
import PageTitle from '../body_components/page_title/page_title.js';

export default class AboutPage extends React.Component {
  static getDerivedStateFromProps(props) {
    return {page: props.page };
  }

  render() {
    return (
      <section id={this.state.page + "_page_content"}>
        <PageTitle content="A little bit about me" />
      </section>
    );
  }
}