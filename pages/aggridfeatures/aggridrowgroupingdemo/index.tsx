import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/aggridfeatures/aggridrowgroupingdemo')}
      pageTitle={'AdaptableBlotter.JS ag-Grid Row Grouping Demo'}
      description={
        <div>
          <h4>
            <h4>Row Grouping Demo</h4>
          </h4>
          <p>
            3 columns have <b>row grouping</b> applied on them:{' '}
            <i>Ship Country</i> (on by default), <i>Employee</i> and{' '}
            <i>Contact</i>
          </p>
        </div>
      }
    />
  );
};
