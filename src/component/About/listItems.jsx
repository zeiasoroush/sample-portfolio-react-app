import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktop, faUser, faMobile } from '@fortawesome/free-solid-svg-icons';

class Listitems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 1
    };
    this.tabActive = this.tabActive.bind(this);
  }
  handlClick(id) {
    this.setState({ activeTab: id }, () => {
      this.props.getidCallback(this.state.activeTab);
      console.log('active tab from listitems', this.state.activeTab);
    });
  }

  tabActive(id) {
    return id === this.state.activeTab ? 'ui-tabs-active' : '';
  }
  handleIcon(index) {
    if (index === 0) {
      return faDesktop;
    } else if (index === 1) {
      return faUser;
    } else {
      return faMobile;
    }
  }
  render() {
    return (
      <ul role="tablist">
        {this.props.anchorContent.map((content, index) => {
          console.log('index', index + ' state' + this.state.activeTab);
          return (
            <li
              key={index}
              className={this.tabActive(content.id)}
              role="tab"
              aria-controls={content.tabs}
              aria-labelledby={`ui-id-${content.id}`}
            >
              <a
                id={`ui-id-${content.id}`}
                role="presentation"
                href={content.href}
                onClick={this.handlClick.bind(this, content.id)}
              >
                <div>
                  <FontAwesomeIcon icon={this.handleIcon(index)} size="xs" />
                </div>
              </a>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default Listitems;
