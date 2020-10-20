import React from 'react';

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {  }
  componentWillUnmount() {  }
  render() {
    return (
      <nav class="desktop-nav">
        <a href="./">Home</a>
        <a href="./">About</a>
        <a href="./">Skills</a>
        <a href="./">Projects</a>
        <a href="./">Blog</a>
        <a href="./">Contact</a>
    </nav>
    );
  }
}

export default Menu;