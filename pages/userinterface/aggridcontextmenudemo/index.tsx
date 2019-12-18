import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/userinterface/aggridcontextmenudemo')}
      pageTitle={'Context Menu Demo'}
      description={
        <div>
          <h4>Context Menu Demo</h4>
          <p>To do</p>
        </div>
      }
    />
  );
};
