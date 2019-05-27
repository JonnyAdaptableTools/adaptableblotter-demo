import React from 'react';
import DynamicDemoPage from '../../src/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../src/client/aggridconfigdemo')}
      pageTitle={'AdaptableBlotter.JS ag-Grid Config Demo'}
      description={
        <div>
          <h4>AdaptableBlotter.JS - Predefined Config Demo</h4>
          <p>
            2 Layouts, 2 Conditional Styles, 1 Report, 1 Custom Sort, Dashboard
            changes etc.
          </p>
        </div>
      }
    />
  );
};
