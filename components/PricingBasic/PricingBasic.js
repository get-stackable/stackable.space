import React from 'react';
import './PricingBasic.scss';
import UiLink from '../../components/UiLink';

class PricingBasic extends React.Component {
  render() {
    return (
      <div className="ui fluid container pricing basic">
        <div className="ui container">
          <div className="ui stackable three columns grid">
            <div className="column" style={{'paddingTop': '8em'}}>
              <div className="ui medium header">Deliver Content like a pro</div>
              <p>Grab a free account tons of resources and space to test your next website or app or multichannel content platform!</p>
            </div>
            <div className="column">
              <table className="ui very basic table">
                <thead>
                  <tr>
                    <th>Micro</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="price">$0</td>
                  </tr>
                  <tr>
                    <td>
                      <UiLink className="ui yellow button">Start Now</UiLink>
                    </td>
                  </tr>
                  <tr>
                    <td>250mb Database<br />on our development servers</td>
                  </tr>
                  <tr>
                    <td>40,000 Api Requests</td>
                  </tr>
                  <tr>
                    <td>600mb Image storage</td>
                  </tr>
                  <tr>
                    <td>unlimited stacks</td>
                  </tr>
                  <tr>
                    <td className="compare">
                      <a onClick={() => smoothScroll.animateScroll('#detailed-table')}>COMPARE ALL FEATURES</a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="column">
              <table className="ui very basic table">
                <thead>
                <tr>
                  <th>Production</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td className="price">$20</td>
                </tr>
                <tr>
                  <td>
                    <UiLink className="ui yellow button">Start Now</UiLink>
                  </td>
                </tr>
                <tr>
                  <td>1gb Database<br />production grade</td>
                </tr>
                <tr>
                  <td>200,000 Api Requests</td>
                </tr>
                <tr>
                  <td>2gb Image storage</td>
                </tr>
                <tr>
                  <td>unlimited stacks</td>
                </tr>
                <tr>
                  <td className="compare">
                    <a onClick={() => smoothScroll.animateScroll('#detailed-table')}>COMPARE ALL FEATURES</a>
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PricingBasic;
