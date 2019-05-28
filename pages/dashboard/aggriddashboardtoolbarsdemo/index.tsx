import React from 'react';
import DynamicDemoPage from '../../../src/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/aggriddashboardtoolbarsdemo')}
      pageTitle={'AdaptableBlotter.JS ag-Grid Dashboard Toolbars Demo'}
      description={
        <div>
          <h4>Configuring Dashboard Toolbars</h4>
          <p>
            You are able to set up the Dashboard (through Dashboard Predefined
            Config) so that it shows only the toolbars you wish, with the look
            and feel that best matches your requirements.
          </p>
          <p>This example has a few toolbars - todo...</p>
        </div>
      }
    />
  );
};
