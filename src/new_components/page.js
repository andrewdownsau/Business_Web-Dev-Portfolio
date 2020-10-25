import React from 'react';
import TopNav from './top_nav/top_nav.js'

// Page main components render depending on page set by the URL.
// To add new pages you must create a new page js file and add it
// to this program's imports and render_url_matched_page function
import HomePage from './pages/home_page.js';
import AboutPage from './pages/about_page.js';
import SkillsPage from './pages/skills_page.js';
import ProjectsPage from './pages/projects_page.js';
import BlogPage from './pages/blog_page.js';
import ContactPage from './pages/contact_page.js';

import Footer from './footer/footer.js'

export default class Page extends React.Component {
  static getDerivedStateFromProps(props) {
    return {page: props.page };
  }

  render() {
    return (
      <section id={this.state.page}>
        <TopNav />
        {render_url_matched_page(this.state.page)}
        <Footer />
      </section>
    );
  }
}

function render_url_matched_page(page) {
  switch (page) {
    case "about":
      return <AboutPage page={page}/>;
    case "skills":
      return <SkillsPage page={page}/>;
    case "projects":
      return <ProjectsPage page={page}/>;
    case "blog":
      return <BlogPage page={page}/>;
    case "contact":
      return <ContactPage page={page}/>;
    default:
      return <HomePage page={page}/>;
  }
}