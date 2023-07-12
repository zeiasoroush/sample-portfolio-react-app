import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './component/Header/Header';
import HomePage from './component/Homepage/HomePage';
import AboutPage from './component/About/About';
import Gallery from './component/Projects/projectsPage';
import ContactUsPage from './component/ContactUs/ContactUspage';
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
              <Routes>
                <Route exact path="/" element={<HomePage />} />
                <Route path="/About" element={<AboutPage />} />
                <Route path="/Gallery" element={<Gallery />} />
                <Route path="/ContactUs" element={<ContactUsPage />} />

              </Routes>
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
