import React from 'react';
import './ContactForm.scss';

class ContactForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      message: ''
    };
  }

  render() {
    return (
      <div className="ui fluid container contact form">
        <div className="ui text container">
          <div className="ui two columns grid">
            <div className="column right">
              <p>Feel free to get in touch with us by following networks.</p>
              <div className="ui list">
                <div className="item">
                  <i className="twitter icon"></i>
                  <a className="content" href="https://twitter.com/GetStackable">
                    @GetStackable
                  </a>
                </div>
                <div className="item">
                  <i className="slack icon"></i>
                  <div className="content">
                    <a href="http://slack.stackable.space/">slack chat</a>
                  </div>
                </div>
                <div className="item">
                  <i className="mail icon"></i>
                  <div className="content">
                    <a href="mailto:hi@appfuel.co.uk">hi@appfuel.co.uk</a>
                  </div>
                </div>
                <div className="item">
                  <i className="facebook icon"></i>
                  <div className="content">
                    <a href="https://www.facebook.com/Stackablespace-1079849398701825/">facebook page</a>
                  </div>
                </div>
                <div className="item">
                  <i className="marker icon"></i>
                  <div className="content">
                    London, UK
                  </div>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="ui form">
                <div className="field">
                  <label>Your Name</label>
                  <input type="text" placeholder="Your Name" />
                </div>
                <div className="field">
                  <label>Your Email</label>
                  <input type="text" placeholder="Your Name" />
                </div>
                <div className="field">
                  <label>Message</label>
                  <textarea rows="4" placeholder="Message" />
                </div>
                <button className="ui button" type="submit">Send</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ContactForm;
