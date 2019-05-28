import React from 'react';
import DynamicDemoPage from '../../../src/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/aggriddashboardvisibilitydemo')}
      pageTitle={'AdaptableBlotter.JS ag-Grid Dashboard Visibility Demo'}
      description={
        <div>
          <h4>Configuring Dashboard Visbility</h4>
          <p>To do</p>
        </div>
      }
    />
  );
};
