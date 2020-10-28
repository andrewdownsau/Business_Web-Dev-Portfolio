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
          alt= "Me sitting at a tree with laptop"
          src= "/images/body/title_image2.svg" />
        <h1 className="card_title">{this.state.content.card_title}</h1>
        <p className="card_summary">
        {this.state.content.card_text}
        </p>
      </section>
    );
  }
}