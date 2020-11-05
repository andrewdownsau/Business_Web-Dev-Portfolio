import React from 'react';
import TimeLineItem from './time_line_item/time_line_item.js';
import './time_line.css';

export default class TimeLine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "time_line",
      columns: 2
    };
    if(window.innerWidth <= 800) {this.state.columns = 1}
    this.updateDimensions_timeline = this.updateDimensions_timeline.bind(this);
  }

  updateDimensions_timeline() {
    let columns_displayed = 2;
    if(window.innerWidth <= 800) {columns_displayed = 1}
    this.setState({ columns: columns_displayed });
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions_timeline);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions_timeline);
  }

  static getDerivedStateFromProps(props) {
    return { content: props.content };
  }

  render() {
    const time_line_item_arr = generate_time_line_items(this.state.columns, this.state.content);
    
    return (
      <section id={this.state.id} >
        {this.state.columns === 2 &&
          <section id="tl_left_column" style={{width: "45%"}}>
            {time_line_item_arr[0]}
          </section>
        }
        <section id="tl_right_column" style={{width: check_width()}}>
          {time_line_item_arr[1]}
        </section>
      </section>
    );
  }
}

export function generate_time_line_items(columns, content){
  const time_line_item_arr = [[],[]];
  for(let index=0; index < content.length; index++) {
    if(columns === 1){
      time_line_item_arr[1].push(
        <TimeLineItem 
          key={"time_line_item" + index} 
          id={"time_line_item" + index} 
          visibility="visible"
          text_display="none"
          line_displayed={1}
          content={content[index]}/>)
    }
    else if(columns === 2) {
      for(var column_index = 0; column_index < 2; column_index++){
        time_line_item_arr[column_index].push(
          <TimeLineItem 
            key={"time_line_item" + index} 
            id={"time_line_item" + index} 
            visibility={check_visibility(index, column_index)}
            line_displayed={column_index}
            content={content[index]}/>);
      }
    }
  }
  return time_line_item_arr;
}

function check_visibility(index, remainder){
  let visibility = "hidden";
  if(index%2 === remainder){
    visibility = "visible";
  }
  return visibility;
}

export function check_width(){
  if(window.innerWidth <= 800) {
    return "90%";
  }
  else {
    return "45%";
  }
}

