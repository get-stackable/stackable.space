import React from 'react';
import './PricingDetailed.scss';

let plans = [{
  feature: 'Price',
  micro: 'Free!',
  production: '$20',
  professional: '$200',
  enterprise: 'contact'
}, {
  feature: 'DB Storage',
  micro: '250 mb',
  production: '1024 mb',
  professional: '2048 mb',
  enterprise: 'contact'
}, {
  feature: 'Image Storage',
  micro: '600 mb',
  production: '2048 mb',
  professional: '5000 mb',
  enterprise: 'contact'
}, {
  feature: 'API Calls',
  micro: '40,000 monthly',
  production: '200,000 monthly',
  professional: '1,000,000 monthly',
  enterprise: 'contact'
}, {
  feature: 'Images Requests',
  micro: '50,000 monthly',
  production: '250,000 monthly',
  professional: '1,000,000 monthly',
  enterprise: 'contact'
}, {
  feature: 'Unlimited Stacks',
  micro: '<i class="check circle icon primary" />',
  production: '<i class="check circle icon primary" />',
  professional: '<i class="check circle icon secondary" />',
  enterprise: 'contact'
}, {
  feature: 'Unlimited Containers',
  micro: '<i class="check circle icon primary" />',
  production: '<i class="check circle icon primary" />',
  professional: '<i class="check circle icon secondary" />',
  enterprise: 'contact'
}, {
  feature: 'Unlimited Items',
  micro: '<i class="check circle icon primary" />',
  production: '<i class="check circle icon primary" />',
  professional: '<i class="check circle icon secondary" />',
  enterprise: 'contact'
}, {
  feature: 'Unlimited Users',
  micro: '<i class="check circle icon primary" />',
  production: '<i class="check circle icon primary" />',
  professional: '<i class="check circle icon secondary" />',
  enterprise: 'contact'
}, {
  feature: 'Database Type',
  micro: 'development level',
  production: 'enterprise level',
  professional: 'enterprise level',
  enterprise: 'contact'
}];

class PricingDetailed extends React.Component {
  render() {
    return (
      <div className="ui fluid dark container pricing detailed" id="detailed-table">
        <div className="ui center aligned text container">
          <div className="ui medium main inverted header">
            Compare all features
            <div className="sub header">
              see your pathway to success below!
            </div>
          </div>
          <table className="ui basic inverted table">
            <thead>
              <tr>
                <th width="24%"></th>
                <th width="19%">Micro</th>
                <th width="19%">Production</th>
                <th width="19%">Professional</th>
                <th width="19%">Enterprise</th>
              </tr>
              <tr className="secondary">
                <th>Features</th>
                <th><img src="/stack-2.png" /></th>
                <th><img src="/stack-2.png" /></th>
                <th><img src="/stack-2.png" /></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {plans.map((plan, index) => {
                return (
                  <tr key={index}>
                    <td className="dotted">
                      {plan.feature}
                      <i className="help circle icon" />
                    </td>
                    <td dangerouslySetInnerHTML={{__html: plan.micro}} />
                    <td dangerouslySetInnerHTML={{__html: plan.production}} />
                    <td dangerouslySetInnerHTML={{__html: plan.professional}} />
                    <td dangerouslySetInnerHTML={{__html: plan.enterprise}} />
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default PricingDetailed;
