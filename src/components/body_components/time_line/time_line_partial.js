import React from 'react';
import {generate_history_cards} from './time_line.js';
import './time_line.css';

export default class TimeLinePartial extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "time_line_partial",
      columns: 1
    };
  }

  static getDerivedStateFromProps(props) {
    return {
      content: props.content
    };
  }

  render() {
    const history_card_arr = generate_history_cards(this.state.columns, this.state.content);
    
    return (
      <section id={this.state.id} >
        {history_card_arr[1]}
      </section>
    );
  }
}

