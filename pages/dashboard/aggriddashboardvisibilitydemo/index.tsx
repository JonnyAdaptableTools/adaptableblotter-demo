import React from 'react';
import DynamicDemoPage from '../../../src/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/aggriddashboardvisibilitydemo')}
      pageTitle={'AdaptableBlotter.JS ag-Grid Dashboard Visibility Demo'}
      description={
        <div>
          <h4>Dashboard Visibility Demo</h4>
          <p>
            You can specify - through Predefined Config - the visibility and
            size of the Dashboard. You can set the Visibility to be Visible
            (default), Minimised (just Blotter name is shown) and Hidden.
          </p>
          <p>
            The 'Zoom' property sets how big the Dashboard is (between 0 and 1).
          </p>
          <p>
            Note: you can minimise / maximise the Dashboard by clicking the
            cheveron in the Home Toolbar and you can show / hide the Toolbar
            through the Column Menu.
          </p>
          <p>
            In this example we have set the Dashboard to be Minimised at
            Startup. When opened up, the Dasbhoard displays with a Zoom of 0.85.{' '}
          </p>
        </div>
      }
    />
  );
};
