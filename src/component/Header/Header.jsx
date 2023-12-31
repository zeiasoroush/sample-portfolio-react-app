import React, { Component } from 'react';
import './Header.css';
import Menuitems from './Menuitems';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listItem: [
        {
          id: 1,
          link: '/',
          name: 'HOMEPAGE'
        },
        {
          id: 2,
          link: '/About',
          name: 'ABOUT'
        },
        {
          id: 3,
          link: '/Gallery',
          name: 'OUR GALLERY'
        },
        {
          id: 4,
          link: '/ContactUs',
          name: 'CONTACT US'
        }
      ]
    };
    this.handlecallbackchild = this.handlecallbackchild.bind(this);
  }
  handlecallbackchild(location) {
    console.log(location);
    this.props.callbackhandle(location);
    console.log(location);
  }

  render() {
    return (
      <div className="Header">
        <div className="logo">
          <h1>Sample Portfolio</h1>
          <h2>Portfolio</h2>
        </div>
        <nav>
          <Menuitems
            listcontent={this.state.listItem}
            handlecallbackchild={this.handlecallbackchild}
          />
        </nav>
      </div>
    );
  }
}

export default Header;
