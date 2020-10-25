import React from 'react';
import './external_link.css';

export default class ExternalLink extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      className: "external_link",
      target: "_blank",
      rel: "noopener noreferrer"
    };
  }

  static getDerivedStateFromProps(props) {
    return { 
      link: props.value
    };
  }


  render() {
    return (
      <a
        id={this.state.link.id}
        href={this.state.link.href}
        className={this.state.className}
        target={this.state.target}
        rel={this.state.rel}>
        <img 
          alt={this.state.link.alt}
          src={this.state.link.src}/>
      </a> 
    );
  }
}
