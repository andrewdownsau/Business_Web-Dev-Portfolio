import React from 'react';
import PageTitle from '../../body_components/page_title/page_title.js';
import TimeLine from '../../body_components/time_line/time_line.js';
import Skills from './skills.json';

export default class SkillsPage extends React.Component {
  render() {
    return (
      <section id={"skills_page_content"}>
        <PageTitle content="Time line of my skills and experience" />
        <TimeLine content={Skills} from={"skills main page"}/>
      </section>
    );
  }
}