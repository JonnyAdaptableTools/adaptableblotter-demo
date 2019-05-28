import React from 'react';
import DynamicDemoPage from '../../../src/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/aggridquicksearchdemo')}
      pageTitle={'Quick Search Demo'}
      description={
        <div>
          <h4>Quick Search</h4>
          <p>To do</p>
        </div>
      }
    />
  );
};
