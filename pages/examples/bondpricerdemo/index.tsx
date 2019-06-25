import React from 'react';
import DynamicDemoPage from '../../../src/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/examples/bondpricerdemo')}
      pageTitle={'Bond Pricer Demo'}
      description={
        <div>
          <h4>Bond Pricer Demo</h4>
          <p>To do</p>
        </div>
      }
    />
  );
};
