import React, { Component } from 'react';

import FullBg from './Fullbg';
import Thumbnail from './Thumbnail';
import './HomePage.css';

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contentItem1: [
        {
          num: 1,
          active: true,
          color: '#000',
          title: 'PASSION',
          first: 'IT\'s All about you',
          second: 'Keep going'
        },
        {
          num: 2,
          title: 'Latest ',
          color: '#000',
          first: 'Latest Design',
          second: 'Meaning'
        },
        {
          num: 3,
          title: 'Your Update',
          color: '#fff',
          first: 'Smart',
          second: 'Devices'
        }
      ],
      contentItem2: [
        {
          num: 1,
          src: '01',
          alt: 'Mine'
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
      isactiveID: 1
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
