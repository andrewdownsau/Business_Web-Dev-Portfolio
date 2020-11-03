import React from 'react';
import './styles/home_page.css';
import PageTitle from '../general/body_components/page_title/page_title.js';
import PageText from '../general/body_components/page_text/page_text.js';

export default class HomePage extends React.Component {
  render() {
    return (
      <section id={"home_page_content"}>
        <PageTitle content="Andrew Downs - Web Developer" />
        <PageText content="Welcome to my portfolio website" />
        <PageText content="Feel free to explore the navigation menu to learn more" />
        <img
          id= "title_image"
          alt= "Me sitting at a tree with laptop"
          src= "/images/body/title_image2.svg" />
      </section>
    );
  }
}