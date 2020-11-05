import React from 'react';

export default class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {className: "list_item"};
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
        <li className="list_item">
          {this.state.content}
        </li>
      </section>
    );
  }
}