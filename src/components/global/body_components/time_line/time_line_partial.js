import React from 'react';
import {generate_time_line_items} from './time_line.js';
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
    const time_line_item_arr = generate_time_line_items(this.state.columns, this.state.content);
    
    return (
      <section id={this.state.id} >
        {time_line_item_arr[1]}
      </section>
    );
  }
}

