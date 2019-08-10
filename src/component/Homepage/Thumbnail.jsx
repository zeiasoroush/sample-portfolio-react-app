import React, { Component } from 'react';

class Thumbnail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeId: 1
    };
    this.isActivefunc = this.isActivefunc.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  isActivefunc(activeId) {
    return this.state.activeId === activeId ? 'active' : '';
  }
  handleClick(activeId) {
    this.setState({ activeId }, () => {
      this.props.getidCallback(this.state.activeId);
    });
  }

  render() {
    return (
      <ul>
        {this.props.contentList.map((content, index) => {
          return (
            <li
              className={this.isActivefunc(content.num)}
              onClick={() => this.handleClick(content.num)}
              key={index}
            >
              <img
                src={require(`../../assets/images/thumb-${content.src}.jpg`)}
                alt={content.alt}
              />
            </li>
          );
        })}
      </ul>
    );
  }
}
export default Thumbnail;
