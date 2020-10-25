import React from 'react';
import TopNav from './top_nav/top_nav.js'
// import Body from './body/body.js'
// import Footer from './footer/footer.js'

export default class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {page: "home"};
  }

  static getDerivedStateFromProps(props) {
    return {page: props.page };
  }

  render() {
    return (
      <section id={this.state.page}>
        <TopNav />
      </section>
    );
  }
}