import React from 'react';
import HistoryCard from './histroy_card/history_card.js';
import './time_line.css';

export default class TimeLine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "time_line",
      columns: 2
    };
  }

  updateDimensions() {
    if(window.innerWidth <= 800) {
      this.setState({ columns: 1 });
    }
    else {
      this.setState({ columns: 2 });
    }
  }

  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions.bind(this));
  }

  static getDerivedStateFromProps(props) {
    return {content: props.content };
  }

  render() {
    const history_card_arr = generate_history_cards(this.state.columns, this.state.content);
    
    return (
      <section id={this.state.id} >
        {this.state.columns === 2 &&
          <section id="tl_left_column" style={{width: "45%"}}>
            {history_card_arr[0]}
          </section>
        }
        <section id="tl_right_column" style={{width: check_width()}}>
          {history_card_arr[1]}
        </section>
      </section>
    );
  }
}

function generate_history_cards(columns, content){
  const history_card_arr = [[],[]];
  // let history_card_props = {key: };
  for(let index=0; index < content.length; index++) {
    if(columns === 1){
      history_card_arr[1].push(
        <HistoryCard 
          key={"history_card" + index} 
          id={"history_card" + index} 
          visibility="visible"
          text_display="none"
          line_displayed={1}
          content={content[index]}/>)
    }
    else if(columns === 2) {
      for(var column_index = 0; column_index < 2; column_index++){
        history_card_arr[column_index].push(
          <HistoryCard 
            key={"history_card" + index} 
            id={"history_card" + index} 
            visibility={check_visibility(index, column_index)}
            line_displayed={column_index}
            content={content[index]}/>)
      }
    }
  }
  return history_card_arr;
}

function check_visibility(index, remainder){
  let visibility = "hidden";
  if(index%2 === remainder){
    visibility = "visible";
  }
  return visibility;
}

function check_width(){
  if(window.innerWidth <= 800) {
    return "90%";
  }
  else {
    return "45%";
  }
}

