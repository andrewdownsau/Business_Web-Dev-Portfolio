import React from 'react';
import './App.css';
import Menu from './components/menu/menu.js';
import Footer from './components/footer/footer.js';
import Body from './components/body.js';
import {
  Switch,
  Route
} from "react-router-dom";


export default function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/about">
          <Menu page="about"/>
          <Body link="about"/>
        </Route>
        <Route path="/skills">
          <Menu page="skills"/>
          <Body link="skills"/>
        </Route>
        <Route path="/projects">
          <Menu page="projects"/>
          <Body link="projects"/>
        </Route>
        <Route path="/blog">
          <Menu page="blog"/>
          <Body link="blog"/>
        </Route>
        <Route path="/contact">
          <Menu page="contact"/>
          <Body link="contact"/>
        </Route>
        <Route path="/">
          <Menu page="Home"/>
          <Body link="home"/>
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}
