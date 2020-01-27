import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/aggridfeatures/aggridrowgroupingdemo')}
      pageTitle={'Row Grouping Demo'}
      description={
        <div>
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
