import React from 'react';
import '../styles/skill_page.css'
import PageTitle from '../../global/body_components/page_title/page_title';
import PageText from '../../global/body_components/page_text/page_text';
import TimeLinePartial from '../../global/body_components/time_line/time_line_partial';
import Skills from './skills.json';

export default class SkillPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0
    };
  }

  static getDerivedStateFromProps(props) {
    return {
      index: props.index
    };
  }
  
  render() {
    return (
      <section id={"skill_page"}>
        <TimeLinePartial content={Skills} />
        <section id="skill_content">
          <i className={Skills[this.state.index].tl_item_icon_class + " time_line_item_icon large_icon"}></i>
          <PageTitle content={Skills[this.state.index].tl_item_title} />
          <PageText content={Skills[this.state.index].detailed_text} />
        </section>
      </section>
    );
  }
}