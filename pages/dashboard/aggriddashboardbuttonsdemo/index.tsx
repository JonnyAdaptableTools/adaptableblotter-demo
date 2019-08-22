import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/dashboard/aggriddashboardbuttonsdemo')}
      pageTitle={'AdaptableBlotter.JS ag-Grid Dashboard Buttons Demo'}
      description={
        <div>
          <h4>Dashboard Buttons Demo</h4>
          <p>
            As part of Dashboard Predefined Config you can specify which buttons
            and dropdowns are visible in the 'Home' toolbar (the one on the
            extreme left).
          </p>
          <p>
            In this example we have set the 'Dashboard', 'ColumnChooser',
            'Chart', 'SmartEdit', 'Alert' and 'Reminder' buttons to be visible.
          </p>
          <p>
            We have chosen to hide the <i>About</i> and <i>System Status</i>{' '}
            buttons, and we have also opted to hide the <i>Columns</i> and{' '}
            <i>Toolbars</i> dropdowns.
          </p>
        </div>
      }
    />
  );
};
