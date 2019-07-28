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
          name: 'HOMEPAGE',
        },
        {
          id: 2,
          link: '/AboutUs',
          name: 'ABOUT US',
        },
        {
          id: 3,
          link: '/Gallery',
          name: 'OUR GALLERY',
        },
        {
          id: 4,
          link: '/ContactUs',
          name: 'CONTACT US',
        }
      ],
      location: ''
    };
    this.handlecallbackchild = this.handlecallbackchild.bind(this);
  }
  handlecallbackchild(location) {
    this.props.callbackhandle(location);
  }

  render() {
    return (
      <div className="Header">
        <div className="logo">
          <h1>Earth</h1>
          <h2>E</h2>
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
