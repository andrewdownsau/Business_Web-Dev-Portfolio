import React from 'react';
import { Link } from 'react-router-dom';
import './card.css';

export default class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {className: "card"};
  }

  static getDerivedStateFromProps(props) {
    return {
      id: props.id,
      content: props.content,
      url: props.url
    };
  }

  render() {
    return (
      <Link
        id={this.state.id}  className={this.state.className} to={this.state.url}>
          <img
            className= "card_image"
            alt= {this.state.content.images[0].alt}
            src= {this.state.content.images[0].src} />
          <h1 className="card_title">{this.state.content.title}</h1>
          <p className="card_summary">
            {this.state.content.subtitle}
          </p>
      </Link>
    );
  }
}