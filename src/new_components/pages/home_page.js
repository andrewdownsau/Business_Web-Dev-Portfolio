import React from 'react';
import PageTitle from '../body/body_components/page_title/page_title.js';

export default class HomePage extends React.Component {
  static getDerivedStateFromProps(props) {
    return {page: props.page };
  }

  render() {
    return (
      <section id={this.state.page + "_page_content"}>
        <PageTitle content="Andrew Downs - Web Developer" />
      </section>
    );
  }
}