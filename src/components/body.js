import React from 'react';
import './body.css';
import data from './data/data.json';

export default function renderer(props) {

  const output = []
  const children = []
  for (var j = 0; j < data.length; j++) {
    if(data[j].id === props.link){
      for (var i = 0; i < data[j].children.length; i++) {
        children.push(React.createElement(
          data[j].children[i].type,
          { 
            key: i+1,
            id: data[j].children[i].id,
            src: data[j].children[i].src,
            alt: data[j].children[i].alt,
            className: data[j].children[i].class
          },
          data[j].children[i].children
        ));
      }
      
      output.push(React.createElement(
        data[j].type,
        {key: 0, id: data[j].id},
        children
      ));
    }
  }

  return (
    output
  );
}