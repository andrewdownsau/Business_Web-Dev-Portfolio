import React from 'react';
import PageTitle from '../page_title/page_title';
import { Link } from 'react-router-dom';
import './page_title_with_menu.css';

export default class PageTitleWithMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static getDerivedStateFromProps(props) {
    return {
      title: props.title,
      links_arr: props.links_arr
    };
  }
  
  render() {
    const menu_links = [];
    let link_content_arr = ["Prev", "Next", "Main", "<", ">", "M"];
    let className_arr = ["medium_button", "small_button"];
    for(let index=0; index < 3; index++){
      for(var size_index=0; size_index < 2; size_index++){
        var display_option = "";
        if(this.state.links_arr[index] ===  "none") {
          display_option = "none";
        }
        menu_links.push(
          <Link 
            key={"menu_link_" + index + size_index*3}
            className={className_arr[size_index]} 
            style={{display: display_option}}
            to={this.state.links_arr[index]}>
              {link_content_arr[index + size_index*3]}
          </Link>
        );
      }
    }
    // for(let index=0; index < 3; index++){
    //   menu_links.push(
    //     <Link 
    //       key={"menu_link_" + index+3}
    //       className={"small_button"} 
    //       to={this.state.links_arr[index]}>
    //         {link_content_arr[index+3]}
    //     </Link>
    //   );
    // }
    return (
        <section id="title_area_with_menu">
          <PageTitle id={"page_title_next_to_menu"} content={this.state.title} />
          <nav id="articles_menu" className="sub_menu">
            {menu_links}
          </nav>
        </section>
    );
  }
}