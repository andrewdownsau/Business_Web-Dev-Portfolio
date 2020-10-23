import React from 'react';
import './external_link.css';
// import {NavLink} from "react-router-dom";

export default function render(props){
  const external_link_link = (
    <a 
      id={props.external_link.id}
      href={props.external_link.href}
      target="_blank" 
      rel="noopener noreferrer">
      <img 
        alt={props.external_link.alt}
        src={props.external_link.src}/>
    </a> 
  );
  return (
    external_link_link
  );
}
