import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './component/Header/Header';
import Homepage from './component/Homepage/Homepage';
import Aboutuspage from './component/About/Aboutus';
import Gallery from './component/OurGallery/Gallerypage';
import ContactUspage from './component/ContactUs/ContactUspage';
import SequencePreloader from './SequencePreloader';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      location: 'http://localhost:3000/'
    };
    this.handlecallbackfromHeader = this.handlecallbackfromHeader.bind(this);
  }

  handlecallbackfromHeader(location) {
    this.setState({ location }, () => {
      console.log('location in app', location);
    });
  }
  componentDidMount() {
    this.setState({ loading: true });
  }
  render() {
    return (
      <div>
        <SequencePreloader loading={this.state.loading} />
        <Router>
          <div className="App">
            <Header callbackhandle={this.handlecallbackfromHeader} />
            <div className="slides">
              <Switch>
                <Route exact path="/" component={Homepage} />
                <Route path="/AboutUs" component={Aboutuspage} />
                <Route path="/Gallery" component={Gallery} />
                <Route path="/ContactUs" component={ContactUspage} />
              </Switch>
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
