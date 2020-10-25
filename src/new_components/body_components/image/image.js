import React from 'react';
import './image.css';

export default class Image extends React.Component {
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