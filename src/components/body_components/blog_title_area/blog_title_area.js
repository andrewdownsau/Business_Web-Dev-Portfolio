import React from 'react';
import PageTitle from '../page_title/page_title.js';
import { Link } from 'react-router-dom';

export default class BlogTitleArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {mode: "map"};
  }

  static getDerivedStateFromProps(props) {
    return {
      mode: props.mode
    };
  }
  
  render() {
    const active_status = ["active", "active"];
    for(var i = 0; i < 2; i++) {
      if(this.state.mode === "map") {active_status.push("")}
      else if(this.state.mode === "list") {active_status.unshift("")}
    }
    return (
        <section id="blog_title_area">
          <PageTitle content="Blog Archive" />
          <nav id="map_list_switch" className="switch">
            <Link className={"slider " + active_status[0]} to={"/blog/map"}>Map </Link>
            <Link className={"slider_sm " + active_status[1]} to={"/blog/map"}>M </Link>
            <Link className={"slider " + active_status[2]} to={"/blog/list"} >List</Link>
            <Link className={"slider_sm " + active_status[3]} to={"/blog/list"}>L</Link>
          </nav>
        </section>
    );
  }
}