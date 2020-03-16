import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/dashboard/aggriddashboardfloatingdemo')}
      pageTitle={'Dashboard Floating Demo'}
      description={
        <div>
          <p>
            By default, AdapTable shows as open, and above the grid, so you can
            see all the Tabs and Toolbars.
          </p>
          <p>
            However you can change this via the <i>floating</i> property in
            Dashboard Predefined Config. This will reduce the Dashboard to a
            reduced header that you can move where you want.
          </p>
          <p>
            You can move in and out of Floating mode by either clicking the Name
            in the Header or the 'carat' button on the right hand side.
          </p>
          <p>
            In this example we have set the Dashboard to floating; note that if
            you move the header around and then refresh the page, AdapTable will
            'remember' its last location.
          </p>
        </div>
      }
    />
  );
};
