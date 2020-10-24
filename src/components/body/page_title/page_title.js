import React from 'react';
import './page_title.css';
import Title from './page_titles.json'

export default function renderer(props) {
  let page_title = "";
  for( var index = 0; index < Title.length; index++){
    if(Title[index].page === props.page) {
      page_title = Title[index].title;
    }
  }
  return (
    <h1 id="page_title">{page_title}</h1>
  );
}
