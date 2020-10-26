import React from 'react';
import PageTitle from '../body_components/page_title/page_title.js';
import TimeLine from '../body_components/time_line/time_line.js';

export default class SkillsPage extends React.Component {
  render() {
    return (
      <section id={"skills_page_content"}>
        <PageTitle content="Time line of my skills and experience" />
        <TimeLine content={generate_content_array()}/>
      </section>
    );
  }
}


function generate_content_array() {
  const return_content_array = [
    {
      card_icon_class: "fa fa-file-code-o",
      card_title: "2020 Coder Academy Boot-camp",
      card_text: "Fast-track web development coding course designed to qualify me for full stack development"
    },
    {
      card_icon_class: "fa fa-train",
      card_title: "2018 Railway Signalling Cadetship (John Holland)",
      card_text: "Cadetship program coordinated by LXRA to up-skill electrical engineers to railway signalling engineer"
    },
    {
      card_icon_class: "fa fa-bolt",
      card_title: "2017 Electrical Eng BA (RMIT)",
      card_text: "4-year Electrical/electronic engineering bachelor degree with first class honors"
    },
    {
      card_icon_class: "fa fa-star",
      card_title: "2014 Comedy Producer Assistant",
      card_text: "Assistant to general manager of comedy production/management company (Independent Artists)"
    },
    {
      card_icon_class: "fa fa-graduation-cap",
      card_title: "2012 In2Science Mentoring (RMIT)",
      card_text: "RMIT sponsored mentorship program connecting teaching aid volunteers to secondary schools in Melbourne"
    }
  ];
  return return_content_array;
}
