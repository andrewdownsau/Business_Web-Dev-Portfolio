import React from 'react';
import './page_text.css';

export default class PageText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {className: "page_text"};
  }

  static getDerivedStateFromProps(props) {
    return {content: props.content };
  }

  render() {
    return (
      <p className={this.state.className}>
        {this.state.content}
      </p>
    );
  }
}