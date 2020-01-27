import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/examples/bondpricerdemo')}
      pageTitle={'Bond Pricer Demo'}
      description={
        <div>
          <p>To do</p>
        </div>
      }
    />
  );
};
