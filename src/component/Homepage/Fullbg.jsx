import React, { Component } from 'react';

class Fullbg extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 1 };

    this.isActiveImg = this.isActiveImg.bind(this);
  }

  isActiveImg(index, ActiveimgID) {
    var id = this.props.activeimgId;
    if (id === '0' && index === 0) {
      return 'active-img';
    } else {
      return ActiveimgID === id ? 'active-img' : '';
    }
  }
  render() {
    return (
      <ul>
        {this.props.contentList.map((item, index) => {
          return (
            <li className={this.isActiveImg(index, item.num)} key={index}>
              <div className="slide-caption">
                <h6>{item.title}</h6>
                <h2>
                  {item.first}
                  <br /> {item.second}
                </h2>
              </div>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default Fullbg;
/* class Fullbg extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isactiveId: '1'
    };
    this.isActive = this.isActive.bind(this);
  }
  isActive(value) {
    console.log(' in isactiv fullbg value', typeof value + ' ' + value);
    console.log(
      ' in isactiv fullbg state ',
      typeof this.state.isactiveId + ' ' + this.state.isactiveId
    );
    console.log('if in  isactiv fullbg', this.state.isActiveId === value);

    return this.state.isActiveId === value ? 'active-img' : '';
  }

  render() {
    return (
      <ul>
        {this.props.contentList.map((which, index) => {
          return (
            <li className={this.isActive(which.num)} key={index}>
              <div className="slide-caption">
                <h6>{which.title}</h6>
                <h2>
                  {which.first} <br /> {which.second}
                </h2>
              </div>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default Fullbg;
 */
