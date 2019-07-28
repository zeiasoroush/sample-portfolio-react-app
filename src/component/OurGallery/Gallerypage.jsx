import React, { Component } from 'react';
import Gallerybody from './Gallerybody';
import './Gallery.css';

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gallerycontent: [
        {
          id: 1,
          src: require('../../assets/images/item-01.jpg'),
          alt: 'item1',
          h4: 'Donec non sagittis',
          h6: '$25.00'
        },
        {
          id: 2,
          src: require('../../assets/images/item-02.jpg'),
          alt: 'item2',
          h4: 'Nulla a pharetra',
          h6: '$35.00'
        },
        {
          id: 3,
          src: require('../../assets/images/item-03.jpg'),
          alt: 'item3',
          h4: 'Aliquam convallis',
          h6: '$45.00'
        },
        {
          id: 4,
          src: require('../../assets/images/item-04.jpg'),
          alt: 'item4',
          h4: 'Vivamus vittae #4',
          h6: '$55.00'
        },
        {
          id: 5,
          src: require('../../assets/images/item-05.jpg'),
          alt: 'item5',
          h4: 'Vivamus vittae #6',
          h6: '$65.00'
        },
        {
          id: 6,
          src: require('../../assets/images/item-06.jpg'),
          alt: 'item6',
          h4: 'Vivamus vittae #8',
          h6: '$75.00'
        },
        {
          id: 7,
          src: require('../../assets/images/item-07.jpg'),
          alt: 'item7',
          h4: 'Donec non sagittis',
          h6: '$85.00'
        },
        {
          id: 8,
          src: require('../../assets/images/item-08.jpg'),
          alt: 'item8',
          h4: 'Curabitur sed 8',
          h6: '$95.00'
        },
        {
          id: 9,
          src: require('../../assets/images/item-09.jpg'),
          alt: 'item9',
          h4: 'Curabitur sed 10',
          h6: '$105.00'
        },
        {
          id: 10,
          src: require('../../assets/images/item-10.jpg'),
          alt: 'item10',
          h4: 'Curabitur sed 12',
          h6: '$115.00'
        },
        {
          id: 11,
          src: require('../../assets/images/item-11.jpg'),
          alt: 'item11',
          h4: 'Curabitur sed 14',
          h6: '$125.00'
        },
        {
          id: 12,
          src: require('../../assets/images/item-12.jpg'),
          alt: 'item12',
          h4: 'Curabitur sed 16',
          h6: '$135.00'
        }
      ]
    };
  }
  render() {
    return (
      <div className="slide" id="gallery">
        <div className="content third-content">
          <div className="container-fluid">
            <div className="row">
              <Gallerybody contentBody={this.state.gallerycontent} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Gallery;
