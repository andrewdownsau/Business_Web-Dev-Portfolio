import React from 'react';
import './body.css';
import data from './data/data.json';
import title_image2 from './images/body/title_image2.svg';


function renderer() {

  const output = []
  const children = []
  
  for (var i = 0; i < data.children.length; i++) {
    children.push(React.createElement(
      data.children[i].type,
      { id: data.children[i].id, src: data.children[i].src, alt: data.children[i].alt},
      data.children[i].children
    ));
  }
  
  output.push(React.createElement(
    data.type,
    {id: data.id},
    children
  ));

  return (
    output
  );
}

export default renderer;