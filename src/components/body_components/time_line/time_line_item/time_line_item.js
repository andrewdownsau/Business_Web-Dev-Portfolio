import React from 'react';
import { Link } from 'react-router-dom';
import './time_line_item.css';

export default class TimeLineItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {className: "time_line_item"};
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
    const skills_link_id = this.state.id.charAt(this.state.id.length-1);
    return (
      <section 
        className={this.state.className} 
        style={{visibility: this.state.visibility}}>
        {generate_heading_rule(1, this.state.line_displayed)}
        <Link id={this.state.id} className="tl_item_segment" to={"/skills/" + skills_link_id}>
          <i className={this.state.content.tl_item_icon_class + " time_line_item_icon"}></i>
          <h3 className="time_line_item_title">{this.state.content.tl_item_title}</h3>
          <p className="time_line_item_text" style={{ display: this.state.text_display}}>{this.state.content.tl_item_text}</p>
        </Link>
        {generate_heading_rule(0, this.state.line_displayed)}
      </section>
    );
  }
}

function generate_heading_rule(rule_side, line_displayed){
  if(rule_side === line_displayed) { return <hr className="tl_item_line"/>}
}
