import React from 'react';
import './App.css';
import Page from './components/page.js'
import Pages from './components/pages.json';
import Skills from './components/pages/skills/skills.json';
import Projects from './components/pages/projects/projects.json';
import BlogCategories from './components/pages/blogs/blog_categories.json';
import Blogs from './components/pages/blogs/blog_archive.json';
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
        <Route path= '/blog'> {/* Redirect to map by default for blog archive*/}
          <Redirect to="/blog/map" />
        </Route>
        <Route path= '/'> {/* Redirect to home so that nav link registers as active */}
          <Redirect to="/home" />
        </Route>
      </Switch>
    </div>
  );
}

function generate_route_arr() {
  const route_arr = [];

  // Skill Routes //
  for(let index=0; index < Skills.length; index++){
    route_arr.push(
      <Route key={"skill_route_" + index} path={'/skills/' + index}>
        <Page key={"skill_page_" + index} page={"skill"} index={index}/>
      </Route>
    )
  }

  // Project Routes //
  for(let index=0; index < Projects.length; index++){
    const project = Projects[index].title.replace(/\s/g, '_');
    route_arr.push(
      <Route key={"project_route_" + index} path={'/projects/' + project}>
        <Page key={"project_page_" + index} page={"project"} index={index}/>
      </Route>
    )
  }

  // Blog Routes //
  for(let category_index=0; category_index < BlogCategories.length; category_index++){
    const blog_category = BlogCategories[category_index].category_title
    for(let index=0; index < Blogs.length; index++){
      if(Blogs[index].category.includes(blog_category)){
        // console.log(index);
        const blog_url = Blogs[index].title.replace(/\s/g, '_');
        route_arr.push(
          <Route key={"blog_route_map_" + blog_category + '_' + blog_url} path={'/blog/map/' + blog_category + '/' + blog_url}>
            <Page key={"blog_page_map_" + blog_category + '_' + blog_url} page={"blog_map_article"} index={index}/>
          </Route>
        )
      }
    }
    route_arr.push(
      <Route key={"blog_route_map_" + blog_category} path={'/blog/map/' + blog_category}>
        <Page key={"blog_page_map_" + blog_category} page={"blog_map"} index={blog_category}/>
      </Route>
    )
  }
  route_arr.push(
    <Route key={"blog_route_map"} path={'/blog/map'}>
      <Page key={"blog_page_map"} page={"blog_map"}/>
    </Route>
  )
  route_arr.push(
    <Route key={"blog_route_list"} path={'/blog/list'}>
      <Page key={"blog_page_list"} page={"blog_list"}/>
    </Route>
  )

  // All Main Routes (except Blog)
  for(let index=0; index < Pages.length; index++){
    if(Pages[index] !== "blog") {
      route_arr.push(
        <Route key={Pages[index] + "_route"} path={'/' + Pages[index]}>
          <Page key={Pages[index] + "_page"} page={Pages[index]}/>
        </Route>
      )
    }
    
  }
  return route_arr;
}
