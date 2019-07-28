import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel2';
import 'react-bootstrap';
import './Owl.css';

class Gallerybody extends Component {
  render() {
    const options = {
      margin: 15,

      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 3
        },
        1000: {
          items: 4
        }
      }
    };
    return (
      <OwlCarousel
        className="owl-carousel owl-theme"
        pulldrag="true"
        options={options}
      >
        {this.props.contentBody.map((content, index) => {
          return (
            <div key={index} className="col-md-12">
              <div className="featured-item">
                <a href="https://www.google.com">
                  <img src={content.src} alt={content.alt} />
                </a>
                <div className="down-content">
                  <h4>{content.h4}</h4>
                  <h6>{content.h6}</h6>
                </div>
              </div>
            </div>
          );
        })}
      </OwlCarousel>
    );
  }
}
export default Gallerybody;
