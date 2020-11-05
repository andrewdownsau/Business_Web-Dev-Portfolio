import React from 'react';
import ListItem from '../../../global/body_components/list_item/list_item';
import Blogs from '../blog_archive.json';
import './blog_month_list.css'

export default class BlogMonthList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      month: 0,
      year: 2020
    };
  }

  static getDerivedStateFromProps(props) {
    return {
      month: props.month,
      year: props.year
    };
  }
  
  render() {
    var months = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];
    
    return (
      <section className="blog_list_area">
      <h1>{months[this.state.month] + " " + this.state.year + ":"}</h1>
      <ul>
        {generate_blog_list(String(this.state.month+1))}
      </ul>
    </section>
    );
  }
}

function generate_blog_list(month) {
  const blog_list_arr = [];
  const days = ["1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th", "9th", "10th",
                "11th", "12th", "13th", "14th", "15th", "16th", "17th", "18th", "19th", "20th",
                "21st", "22nd", "23rd", "24th", "25th", "26th", "27th", "28th", "29th", "30th", 
                "31st" ]
  if(parseInt(month) < 10){ month = "0" + month }
  for(var index=0; index < Blogs.length; index++){
    const article_date = Blogs[index].date_created.split("-");
    if(month === article_date[1]){
      const title = days[article_date[0]-1] + ": " + Blogs[index].title
      blog_list_arr.push( 
        <ListItem 
          key={"blog_article_list_" + index} 
          id={"blog_article_list_" + index}
          content={title}/>);
    }
  }
  return blog_list_arr;
}