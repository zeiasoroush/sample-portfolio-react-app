import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

class Menuitems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isactiveId: 1,
      location: 'http://localhost:3000/'
    };
    this.isActive = this.isActive.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  isActive(id, index) {
    if (this.state.isactiveId === 0 && index === 0) {
      return 'ui-tabs-active';
    } else {
      return id === this.state.isactiveId ? 'ui-tabs-active' : '';
    }
  }
  handleClick(e, id) {
    console.log(e);
    const event = e.currentTargethref;
    this.setState({ isactiveId: id, location: event }, () => {
      this.props.handlecallbackchild(this.state.location);
    });
  }
  render() {
    return (
      <ul>
        {this.props.listcontent.map((content, index) => {
          return (
            <li key={index}>
              <Router>
                <Link
                  className={this.isActive(content.id, index)}
                  onClick={e => this.handleClick(e, content.id)}
                  to={content.link}
                >
                  <img
                    src={require(`../../assets/images/icon-${content.id}.png`)}
                    alt={content.name}
                  />
                  <em>{content.name}</em>
                </Link>
              </Router>
            </li>
          );
        })}
      </ul>
    );
  }
}
export default Menuitems;
