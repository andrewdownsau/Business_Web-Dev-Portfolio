import React from 'react';
import Title from './page_title/page_title.js';
import TextContent from './text_content/text_content.js';
import Image from './image/image.js';

export default function renderer(props) {
  return (
    <section id={props.page}>
      <Title page={props.page}/>
      <TextContent page={props.page}/>
    </section>
  );
}

