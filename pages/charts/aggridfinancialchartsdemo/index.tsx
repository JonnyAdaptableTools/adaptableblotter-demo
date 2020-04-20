import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/charts/aggridfinancialchartsdemo')}
      pageTitle={'Financial Charts Demo'}
      description={
        <div>
          <p>The Financial Chart is the latest chart offered by AdapTable.</p>
          <p>It allows you to see finanical data set over a long period</p>
        </div>
      }
      helpResources={<div></div>}
    />
  );
};
