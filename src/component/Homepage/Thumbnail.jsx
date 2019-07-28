import React, { Component } from 'react';

class Thumbnail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeId: '1'
    };
    this.isActivefunc = this.isActivefunc.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  isActivefunc(activeId) {
    return this.state.activeId === activeId ? 'active' : '';
  }
  handleClick(activeId, e) {
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
              onClick={e => this.handleClick(content.num, e)}
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
/* class Thumbnail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeId: '0'
       active: true 
    };
    this.isActive = this.isActive.bind(this);
  }
  isActive(value) {
    console.log(' in isactiv fullbg state ', this.state.ActiveId);

    return this.state.activeId === value ? 'active' : '';
  }
  handleClick(num) {
    const prvState = this.state.active;
    this.setState({ active: !prvState }); 
    this.setState({ activeId: num }, () => {
      console.log('state', this.state);
    });
  }

  render() {
    return (
      <ul>
        {this.props.contentList.map((which, index) => {
          console.log('ul', which.num);
          return (
            <li
              onClick={() => this.handleClick(which.num)}
              className={this.isActive(index).bind(this)}
              key={index}
            >
              <img src={which.name} alt={which.alt} />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default Thumbnail; */
