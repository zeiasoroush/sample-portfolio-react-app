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
                <h6 style={{ color: item.color }}>{item.title}</h6>
                <h2 style={{ color: item.color }}>
                  {item.first}
                  <br /> {item.second}
                </h2>
              </div>
            </li>
          );
        })
        }
      </ul >
    );
  }
}

export default Fullbg;

