import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/userinterface/aggridcolumnmenudemo')}
      pageTitle={'Column Menu Demo'}
      description={
        <div>
          <h4>Column Menu Demo</h4>
          <p>To do</p>
        </div>
      }
    />
  );
};
