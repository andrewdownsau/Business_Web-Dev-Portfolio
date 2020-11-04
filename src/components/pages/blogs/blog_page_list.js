import React from 'react';
import BlogTitleArea from './blog_title_area/blog_title_area';
import BlogMonthList from './blog_month_list/blog_month_list';
import '../styles/blog_page.css'

export default class BlogPageList extends React.Component {
  render() {
    return (
      <section id={"blog_page_content"}>
        <BlogTitleArea mode="list"/>
        <section id= "blog_lists_area">
          {generate_blog_lists()}
        </section>
      </section>
    );
  }
}

function generate_blog_lists() {
  const blog_lists_arr = []
  let month = new Date().getMonth();
  let year = new Date().getYear()+1900;
  for(var index=0; index < 4; index++){
    blog_lists_arr.push(
    <BlogMonthList 
      key={"blog_month_list" + index}
      year={year}
      month={month}/>);
    month--;
  }
  return blog_lists_arr;
}
