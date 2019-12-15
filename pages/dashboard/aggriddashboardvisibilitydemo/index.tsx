import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import(
        '../../../src/client/dashboard/aggriddashboardvisibilitydemo'
      )}
      pageTitle={'Dashboard Visibility Demo'}
      description={
        <div>
          <h4>Dashboard Visibility Demo</h4>
          <p>
            You can specify - through Predefined Config - the visibility and of
            the Dashboard; options are: Visible (default), Minimised (just
            Blotter name is shown) and Hidden.
          </p>
          <p>
            Minimise / maximise the Dashboard by clicking the cheveron in the
            Home Toolbar. Or you can show / hide the Dashboard through the
            Column Menu.
          </p>
          <p>
            In this example we have set the Dashboard to be Minimised at
            startup.{' '}
          </p>
          <p>
            Note: we have also set the name of the Toolbar to 'Blotter Toolbar'
            (via the <i>HomeToolbarTitle</i> property in Dashboard Config. (If
            not set, it defaults to the 'blotterId' property in{' '}
            <i>Blotter Options</i>).
          </p>
        </div>
      }
    />
  );
};
