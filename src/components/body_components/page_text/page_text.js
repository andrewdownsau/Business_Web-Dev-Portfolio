import React from 'react';
import './page_text.css';

export default class PageText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {className: "page_text"};
  }

  static getDerivedStateFromProps(props) {
    return {
      id: props.id,
      display: props.display,
      content: props.content 
    };
  }

  render() {
    return (
      <p 
        id={this.state.id} 
        className={this.state.className} 
        style={{display: this.state.display}}>
          {this.state.content}
      </p>
    );
  }
}