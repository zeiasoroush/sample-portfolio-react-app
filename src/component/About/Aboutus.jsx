import React, { Component } from 'react';

import Listitems from './listItems';
import SectionArea from './SectionArea';
import './Aboutus.css';
import './fontawesome.css';

class Aboutuspage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorContent: [
        {
          id: 1,
          tabs: 'tabs-1',
          href: '#tabs-1'
        },
        {
          id: 2,
          tabs: 'tabs-2',
          href: '#tabs-2'
        },
        {
          id: 3,
          tabs: 'tabs-3',
          href: '#tabs-3'
        }
      ],
      sectionContent: [
        {
          id: 1,
          tabs: 'tabs-1',
          arialabeled: 'ui-id-1',
          title: 'What We Offer?',
          answer: 'Free Bootstrap v4 Theme',
          body1:
            ' Earth is free Bootstrap v4.1.3 HTML Template for you. Feel free to edit and use this website template for any purpose. Please tell your friends about Tooplate website. Follow us on <a href="https://www.facebook.com/tooplate/"> Facebook page</a> for latest updates. Thank you.',
          body2:
            'Aenean non suscipit risus. Nam mattis, ipsum ac aliquet dignissim, eros justo tempor dolor, rutrum feugiat nunc mauris et elit. Maurissem odio, accumsan vel sem sed, aliquam convallis dui. Aenean et commodo est.'
        },
        {
          id: 2,
          tabs: 'tabs-2',
          arialabeled: 'ui-id-2',
          title: 'What We Do?',
          answer: 'Ut nec metus eros',
          body1:
            'Nunc ultricies lectus et sem interdum molestie. Donec non sagittis velit. Vivamus vitae dictum metus, id imperdiet diam. Ves elementum urna erat, eu tincidunt nisl pulvinar nec. Nulla a pharetra felis, sit amet placerat felis. Fusce a tincidunt dui.',
          body2:
            'Quisque blandit purus orci, et cursus ante porttitor in. Curabitur eleifend turpis id diam ultricies hendrerit. Donec et lectus vitae justo porta molestie.'
        },
        {
          id: 3,
          tabs: 'tabs-3',
          arialabeled: 'ui-id-3',
          title: 'Who We Are?',
          answer: 'Etiam tempus ex ut mi',
          body1:
            'Vivamus dictum odio at enim posuere, et dapibus nunc sagittis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
          body2:
            'Integer a egestas tellus, id malesuada velit. Pellentesque tincidunt, libero eu rutrum volutpat, nisi urna mollis felis, sed mollis sem libero at magna.'
        }
      ],
      activTabid: null
    };
  }
  idfromListitem = activeTab => {
    this.setState({ activTabid: activeTab }, () => {
      console.log('active tab in about us', this.state.activTab);
    });
  };
  render() {
    return (
      <div className="slide" id="aboutus">
        <div className="content second-content">
          <div id="tabs">
            <Listitems
              anchorContent={this.state.anchorContent}
              getidCallback={this.idfromListitem}
            />

            <SectionArea
              sectionContent={this.state.sectionContent}
              activeTab={this.state.activTabid}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Aboutuspage;
