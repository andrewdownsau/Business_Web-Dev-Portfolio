import React from 'react';
import './App.css';
import Page from './new_components/page.js'
import Pages from './new_components/pages.json';
import {
  Switch,
  Route,
  Redirect
} from "react-router-dom";


export default function App() {
  return (
    <div key="portfolio_app" className="App">
      <Switch>
        {generate_route_arr()}
        <Route path= '/'> {/* Redirect to home so that nav link registers as active */}
          <Redirect to="/home" />
        </Route>
      </Switch>
    </div>
  );
}

function generate_route_arr() {
  const route_arr = [];
  for(var index=0; index < Pages.length; index++){
    route_arr.push(
      <Route key={Pages[index] + "_route"} path={'/' + Pages[index]}>
        <Page key={Pages[index] + "_page"} page={Pages[index]}/>
      </Route>
    )
  }
  return route_arr;
}
