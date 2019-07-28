import React, { Component } from 'react';
import './Contactus.css';
class ContactUspage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: [
        {
          name: 'name',
          type: 'text',
          className: 'form-control',
          id: 'name',
          placeholder: 'Your name...'
        },
        {
          name: 'name',
          type: 'text',
          className: 'form-control',
          id: 'name',
          placeholder: 'Your name...'
        },
        {
          name: 'name',
          type: 'text',
          className: 'form-control',
          id: 'name',
          placeholder: 'Your name...'
        }
      ]
    };
  }
  render() {
    return (
      <div className="slide" id="contactus">
        <div className="content fourth-content">
          <div className="container-fluid">
            <form id="contact" action="" method="post">
              <div className="row">
                <div className="col-md-12">
                  <h2>Say Hello!</h2>
                </div>
                <div className="col-md-6">
                  <fieldset>
                    <input
                      name="name"
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Your name..."
                      required
                    />
                  </fieldset>
                </div>
                <div className="col-md-6">
                  <fieldset>
                    <input
                      name="email"
                      type="text"
                      className="form-control"
                      id="email"
                      placeholder="Your email..."
                      required
                    />
                  </fieldset>
                </div>
                <div className="col-md-12">
                  <fieldset>
                    <textarea
                      name="message"
                      rows={6}
                      className="form-control"
                      id="message"
                      placeholder="Your message..."
                      required
                      defaultValue={''}
                    />
                  </fieldset>
                </div>
                <div className="col-md-12">
                  <fieldset>
                    <button type="submit" id="form-submit" className="button">
                      Send Now
                    </button>
                  </fieldset>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactUspage;
