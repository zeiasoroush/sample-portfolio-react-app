import React, { Component } from 'react';

import Listitems from './listItems';
import SectionArea from './SectionArea';
import './About.css';
import './fontawesome.css';

class AboutPage extends Component {
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
            ' Aliquam vel sapien sed est placerat pharetra. Suspendisse eros lacus, congue et turpis non, iaculis lacinia tortor. Sed aliquet, elit sed ullamcorper porttitor, est enim semper velit, nec accumsan orci lacus ac ex. Donec interdum congue eros vel aliquet. Donec egestas eu metus ac ultricies. Suspendisse molestie tincidunt volutpat. Ut sodales, ex ac porttitor volutpat, neque est ultrices magna, eu gravida turpis orci eget nulla. Nunc pretium ante sapien, sit amet laoreet lectus sagittis quis. Nunc posuere mollis enim et commodo. Praesent nec sagittis urna, sit amet sodales turpis. In ac ligula vestibulum, scelerisque arcu fermentum, tristique risus. In feugiat odio vel eros malesuada semper. In dictum consequat convallis. Cras at purus a nulla euismod commodo. Sed consectetur semper gravida. Nam a est vitae sem dapibus eleifend eu ut elit.',
          body2:
            'Aenean facilisis sed massa quis ultricies. Pellentesque turpis nunc, facilisis ut tempor vitae, bibendum quis metus. Donec in placerat nunc, eget finibus urna. Nam luctus et neque sit amet hendrerit. Maecenas auctor neque urna, ut mattis orci iaculis vel. Etiam sed malesuada enim. Fusce convallis ligula tempus, accumsan sapien facilisis, condimentum diam. Sed eu hendrerit tortor. Curabitur posuere tempus dui non lobortis. Praesent consectetur, turpis eget venenatis vehicula, ligula orci luctus ex, at ultrices tortor lacus in nibh. Integer egestas nisi sed felis vestibulum dignissim nec sit amet leo. Fusce ut mi a mi interdum ultrices. Sed consectetur quam elit, vel convallis quam eleifend vitae. Nullam felis leo, aliquam eget nulla facilisis, commodo pretium massa.'
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
            'Aenean facilisis sed massa quis ultricies. Pellentesque turpis nunc, facilisis ut tempor vitae, bibendum quis metus. Donec in placerat nunc, eget finibus urna. Nam luctus et neque sit amet hendrerit. Maecenas auctor neque urna, ut mattis orci iaculis vel. Etiam sed malesuada enim. Fusce convallis ligula tempus, accumsan sapien facilisis, condimentum diam. Sed eu hendrerit tortor. Curabitur posuere tempus dui non lobortis. Praesent consectetur, turpis eget venenatis vehicula, ligula orci luctus ex, at ultrices tortor lacus in nibh. Integer egestas nisi sed felis vestibulum dignissim nec sit amet leo. Fusce ut mi a mi interdum ultrices. Sed consectetur quam elit, vel convallis quam eleifend vitae. Nullam felis leo, aliquam eget nulla facilisis, commodo pretium massa.'
        },
        {
          id: 3,
          tabs: 'tabs-3',
          arialabeled: 'ui-id-3',
          title: 'Who We Are?',
          answer: 'Etiam tempus ex ut mi',
          body1:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque bibendum tellus vel libero lacinia dictum. Vestibulum quis erat cursus, sodales arcu sed, fermentum sapien. Vestibulum cursus mi ac nisi blandit, ac faucibus lorem iaculis. Nunc volutpat, sapien eget semper semper, magna tellus fringilla quam, quis viverra libero mauris eget augue. Donec at leo consequat, rutrum lorem quis, vulputate sapien. Quisque scelerisque cursus purus, aliquam euismod ante convallis eu. Praesent vehicula a turpis nec tempus. Nullam non faucibus purus. Duis eros est, rhoncus vel nisl ut, lobortis efficitur nisi. Ut sollicitudin est at lorem dictum, et congue leo consequat. Etiam mollis euismod tortor. Vestibulum rutrum vestibulum mollis.',
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
      <div className="slide" id="about">
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

export default AboutPage;
