import React from 'react';
import PageTitle from '../../general/body_components/page_title/page_title.js';
import Card from '../../general/body_components/card/card.js';
import Projects from './projects.json';

export default class ProjectsPage extends React.Component {
  render() {
    return (
      <section id={"project_page_content"}>
        <PageTitle content="Personal Projects Gallery" />
        {generate_card_array()}
      </section>
    );
  }
}


function generate_card_array() {
  const card_item_arr = [];
  for(let index=0; index < Projects.length; index++) {
    card_item_arr.push( 
    <Card 
      key={"project_card_" + index} 
      id={"project_card_" + index}
      url={"/projects/" + Projects[index].title.replace(/\s/g, '_')}
      content={Projects[index]}/>);
  }
  return card_item_arr;
}