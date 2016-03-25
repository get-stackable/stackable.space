import React from 'react';
import './Libraries.scss';


class Libraries extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      libraries: [{
        title: 'Native mobile app',
        description: 'An app that runs natively in devices',
        image: ''
      }, {
        title: 'Single page app',
        description: 'A Javascript front-end app that uses an API',
        image: ''
      }, {
        title: 'Regular web app',
        description: 'Traditional web app (with refresh)',
        image: ''
      }, {
        title: 'Hybrid mobile app',
        description: 'a JS/HTML5 mobile app that runs in devices',
        image: ''
      }, {
        title: 'Bacdend/API',
        description: 'An API or Service',
        image: ''
      }]
    };
  }

  render() {
    return (
      <div className="ui fluid container libraries">
        <div className="ui center aligned container">
          <div className="ui medium main header">
            Developers we love you
            <div className="sub header">
              <a className="link">we created some libraries check them out</a>
            </div>
          </div>
          <div className="ui doubling five column grid">
            {this.state.libraries.map((library, index) => {
              return (
                <div className="column" key={index}>
                  <div className="icon">
                    <i className="github icon"></i>
                  </div>
                  <div className="content">
                    <div className="ui small header">{library.title}</div>
                    <p>{library.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}

export default Libraries;
