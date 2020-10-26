import React from 'react';
import './page_title.css';

export default class PageTitle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {className: "page_title"};
  }

  static getDerivedStateFromProps(props) {
    return {content: props.content };
  }

  render() {
    return (
      <h1 className={this.state.className}>
        {this.state.content}
      </h1>
    );
  }
}