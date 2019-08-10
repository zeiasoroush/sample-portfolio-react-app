import React, { Component } from 'react';

import FullBg from './Fullbg';
import Thumbnail from './Thumbnail';
import './Homepage.css';

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contentItem1: [
        {
          num: 1,
          active: true,
          title: 'New Arrival',
          first: 'Beautiful',
          second: 'Earth'
        },
        {
          num: 2,
          title: 'Latest One',
          first: 'Tech',
          second: 'Meeting'
        },
        {
          num: 3,
          title: 'Your Update',
          first: 'Smart',
          second: 'Devices'
        }
      ],
      contentItem2: [
        {
          num: 1,
          src: '01',
          alt: 'Earth'
        },
        {
          num: 2,
          src: '02',
          alt: 'Meeting'
        },
        {
          num: 3,
          src: '03',
          alt: 'Smart'
        }
      ],
      isactiveID: 0
    };
    this.idfromThumbnail = this.idfromThumbnail.bind(this);
  }
  idfromThumbnail = activeimgId => {
    this.setState({ isactiveID: activeimgId });
  };
  render() {
    return (
      <div
        className="slide"
        id="homepage"
        style={{ transition: ' heigt 2s', msTransitionDuration: '5s' }}
      >
        <div id="slider-wrapper">
          <div id="image-slider">
            <FullBg
              contentList={this.state.contentItem1}
              activeimgId={this.state.isactiveID}
            />
          </div>
          <div id="thumbnail">
            <Thumbnail
              contentList={this.state.contentItem2}
              getidCallback={this.idfromThumbnail}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Homepage;
