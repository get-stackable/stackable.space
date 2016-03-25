import React from 'react';
import './Libraries.scss';


class Libraries extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      libraries: [{
        title: 'Javascript',
        description: 'Official Stackable library for JS + ReactJs and AngularJs',
        image: 'icon-javascript',
        url: 'https://github.com/get-stackable/stackable-javascript'
      }, {
        title: 'NodeJs',
        description: 'Stackable NodeJs Boilerplate',
        image: 'icon-nodejs',
        url: 'https://github.com/get-stackable/stackable-javascript'
      }, {
        title: 'PHP',
        description: 'Official PHP library',
        image: 'icon-php-alt',
        url: 'https://github.com/get-stackable/stackable-php'
      }, {
        title: 'iOS / Swift',
        description: 'iOS / Swift library coming soon!',
        image: 'fa fa-apple',
        url: '#'
      }, {
        title: 'Android',
        description: 'Android library coming soon!',
        image: 'fa fa-android',
        url: '#'
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
                <div className="column inner" key={index}>
                  <div className="icon">
                    <i className={library.image}></i>
                  </div>
                  <div className="content">
                    <a className="ui small header" href={library.url}>{library.title}</a>
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
