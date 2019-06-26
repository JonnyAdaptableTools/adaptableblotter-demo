import React from 'react';
import DynamicDemoPage from '../../../src/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/examples/fxdemo')}
      pageTitle={'FX Demo'}
      description={
        <div>
          <h4>FX Demo</h4>
          <p>To do</p>
        </div>
      }
    />
  );
};
