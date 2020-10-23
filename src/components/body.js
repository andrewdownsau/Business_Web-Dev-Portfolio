import React from 'react';
import './body.css';
import data from './data/data.json';

export default function renderer(props) {

  const output = [];
  let child = [];
  const children = [];
  

  for (var index = 0; index < data.length; index++) {
    if(data[index].id === props.link){
      child = data[index].children;
      addAllChildElements(child, children);
      
      output.push(React.createElement(
        data[index].type,
        {key: 0, id: data[index].id},
        children
      ));
    }
  }

  return (
    output
  );
}

function addAllChildElements(child, children) {
  for (var index = 0; index < child.length; index++) {
    const grandchild = child[index].children;
    const grandchildren = [];
    if(Array.isArray(grandchild)){
      addAllChildElements(grandchild, grandchildren);
      addChildElement(children, child[index], grandchildren, index+1);
    }
    else{
      addChildElement(children, child[index], grandchild, index+1);
    }
  }
}


function addChildElement(children, data, grandchildren, key) {
  return children.push(React.createElement(
    data.type,
    { 
      key: key,
      id: data.id,
      src: data.src,
      alt: data.alt,
      className: data.class,
      href: data.href
    },
    grandchildren
  ));
}