import React from 'react';
import DynamicDemoPage from '../../../src/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/aggridcategorychartsdemo')}
      pageTitle={'AdaptableBlotter.JS ag-Grid Category Charts Demo'}
      description={
        <div>
          <h4>Category Charts</h4>
          <p>To do</p>
        </div>
      }
    />
  );
};
