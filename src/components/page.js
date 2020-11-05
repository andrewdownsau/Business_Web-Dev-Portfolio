import React from 'react';
import TopNav from './general/top_nav/top_nav.js'

// Page main components render depending on page set by the URL.
// To add new pages you must create a new page js file and add it
// to this program's imports and render_url_matched_page function
import HomePage from './pages/home_page.js';
import AboutPage from './pages/about_page.js';
import SkillsPage from './pages/skills/skills_page.js';
import SkillPage from './pages/skills/skill_page.js';
import ProjectsPage from './pages/projects/projects_page.js';
import ProjectPage from './pages/projects/project_page.js';
import BlogPageMap from './pages/blogs/blog_page_map.js';
import BlogPageList from './pages/blogs/blog_page_list.js';
import ContactPage from './pages/contact_page.js';

import Footer from './general/footer/footer.js'

export default class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {page: "home"};
  }

  static getDerivedStateFromProps(props) {
    return {
      page: props.page,
      index: props.index
    };
  }

  render() {
    return (
      <section id={this.state.page}>
        <TopNav />
        {render_url_matched_page(this.state.page, this.state.index)}
        <Footer />
      </section>
    );
  }
}

function render_url_matched_page(page, index) {
  switch (page) {
    case "about":
      return <AboutPage />;
    case "skills":
      return <SkillsPage />;
    case "skill":
      return <SkillPage index={index}/>;
    case "projects":
      return <ProjectsPage />;
    case "project":
      return <ProjectPage index={index} />;
    case "blog_map":
      return <BlogPageMap index={index}/>;
    case "blog_list":
      return <BlogPageList />;
    case "contact":
      return <ContactPage />;
    default:
      return <HomePage />;
  }
}