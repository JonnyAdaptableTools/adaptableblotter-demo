import React from 'react';
import DynamicDemoPage from '../../../src/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/dashboard/aggriddashboardtoolbarsdemo')}
      pageTitle={'AdaptableBlotter.JS ag-Grid Dashboard Toolbars Demo'}
      description={
        <div>
          <h4>Dashboard Toolbars Demo</h4>
          <p>
            The Dashboard ships with 13 toolbars. They each provide quick access
            to a given Function together with dropdowns and buttons as required.
            Plus a 'configure' button to open the main popup window for that
            Function.
          </p>
          <p>
            By default the Quick Search, Layout, Export and Column Filter
            toolbars are shown but you can make a different selection - through
            Dashboard Predefined Config.
          </p>
          <p>
            In this example we have selected the 'Smart Edit, 'Alert, 'Bulk
            Update' and 'Chart' toolbars.
          </p>
        </div>
      }
    />
  );
};
