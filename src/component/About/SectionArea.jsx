import React, { Component } from 'react';

class SectionArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeArticle: 1
    };
    this.handleHidden = this.handleHidden.bind(this);
    this.handleStyle = this.handleStyle.bind(this);
  }
  handleHidden(id, index) {
    var tabid = this.props.activeTab;

    if (tabid === null && index === 0) {
      return false;
    } else {
      return id === tabid ? false : true;
    }
  }
  handleStyle(id, index) {
    var tabid = this.props.activeTab;
    if (tabid === null && index === 0) {
      return {};
    } else {
      return id === tabid ? {} : { display: 'none' };
    }
  }
  render() {
    return (
      <section className="tabs-content">
        {this.props.sectionContent.map((content, index) => {
          return (
            <article
              key={index}
              id={content.tabs}
              role="tabpanel"
              aria-labelledby={content.arialabeled}
              className="ui-tabs-panel "
              aria-hidden={this.handleHidden(content.id, index)}
              style={this.handleStyle(content.id, index)}
            >
              <h2>{content.title}</h2>
              <span>{content.answer}</span>
              <p>{content.body1}</p>
              <p>{content.body2}</p>
            </article>
          );
        })}
      </section>
    );
  }
}
export default SectionArea;
