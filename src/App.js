import React from 'react';
import './App.css';
import Pages from './components/menu/page_link/page_links.json';
import Menu from './components/menu/menu.js';
import Footer from './components/footer/footer.js';
import Body from './components/body/body_new.js';
import {
  Switch,
  Route,
  Redirect
} from "react-router-dom";


export default function App() {
  const route_arr = [];
  for(var index=0; index < Pages.length; index++){
    route_arr.push(
      <Route path={'/' + Pages[index]}>
        <Menu page={Pages[index]}/>
        <Body page={Pages[index]}/>
      </Route>
    )
  }
  return (
    <div className="App">
      <Switch>
        {route_arr}
        <Route path= '/'> {/* Redirect to home so that nav link registers as active */}
          <Redirect to="/home" />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}
