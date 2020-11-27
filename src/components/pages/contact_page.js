import React from 'react';
import './styles/contact_page.css'
import PageTitle from '../global/body_components/page_title/page_title';

export default class ContactPage extends React.Component {
  static getDerivedStateFromProps(props) {
    return {page: props.page };
  }

  render() {
    return (
      <section id={this.state.page + "_page_content"}>
        <PageTitle content="If you'd like to get in touch..." />
        <form action="https://formspree.io/f/mnqobdee" method="POST">
            <label for="name">Name:</label>
            <input type="text" name="name" /><br />
            <label for="email">Email Address:</label>
            <input type="text" name="email" /><br />
            <label for="message">Message:</label>
            <textarea name="message" rows="10" cols="30"></textarea><br />
            <input id="form-submit" type="submit" value="Submit Message" />
        </form><br />
        <p>Alternatively, you can reach me with these methods:<br />
            email: andrewdownsau@gmail.com<br />
            twitter: https://twitter.com/AndrewDownsDev</p>
      </section>
    );
  }
}