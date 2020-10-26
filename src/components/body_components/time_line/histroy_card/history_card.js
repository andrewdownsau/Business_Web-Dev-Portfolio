import React from 'react';
import './history_card.css';

export default class HistoryCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {className: "history_card"};
  }

  static getDerivedStateFromProps(props) {
    return {
      id: props.id,
      content: props.content,
      visibility: props.visibility,
      text_visibility: props.text_visibility 
    };
  }

  render() {
    return (
      <section 
        id={this.state.id} 
        className={this.state.className} 
        style={{visibility: this.state.visibility}}
      >
        <i className={this.state.content.card_icon_class + " history_card_icon"}></i>
        <h3 className="history_card_title">{this.state.content.card_title}</h3>
        <p className="history_card_text" style={{ visibility: this.state.text_visibility}}>{this.state.content.card_text}</p>
      </section>
    );
  }
}