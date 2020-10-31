import React from 'react';
import './card.css';

export default class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {className: "card"};
  }

  static getDerivedStateFromProps(props) {
    return {
      id: props.id,
      content: props.content 
    };
  }

  render() {
    return (
      <section className={this.state.className}>
        <img
          className= "card_image"
          alt= {this.state.content.card_image.alt}
          src= {this.state.content.card_image.src} />
        <h1 className="card_title">{this.state.content.card_title}</h1>
        <p className="card_summary">
        {this.state.content.card_text}
        </p>
      </section>
    );
  }
}