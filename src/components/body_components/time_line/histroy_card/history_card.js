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
      text_display: props.text_display,
      line_displayed: props.line_displayed
    };
  }

  render() {
    return (
      <section 
        id={this.state.id} 
        className={this.state.className} 
        style={{visibility: this.state.visibility}}
      >
        {generate_heading_rule(1, this.state.line_displayed)}
        <section class="card_segment">
          <i className={this.state.content.card_icon_class + " history_card_icon"}></i>
          <h3 className="history_card_title">{this.state.content.card_title}</h3>
          <p className="history_card_text" style={{ display: this.state.text_display}}>{this.state.content.card_text}</p>
        </section>
        {generate_heading_rule(0, this.state.line_displayed)}
      </section>
    );
  }
}

function generate_heading_rule(rule_side, line_displayed){
  if(rule_side == line_displayed) { return <hr class="card_line"/>}
}