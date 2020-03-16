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
          <p>The Dashboard allows you to cycle between 3 states:</p>
          <ul>
            <li>
              {' '}
              <b>Full</b>: the Dashboard Header is above the grid and one of the
              tabs is open
            </li>
            <li>
              <b>Collapsed</b>: the Dashboard Header is above the grid but none
              of the tabs are open{' '}
            </li>
            <li>
              {' '}
              <b>Floating</b>: the Dashboard appears as a small control which
              you can drag where you want.{' '}
            </li>
          </ul>
          <p>
            But you can, additionally, hide the Dashboard altogether by setting
            the 'Dashboard' to be 'Hidden'in Entitlements; this is what we have
            done in this example
          </p>
        </div>
      }
      helpResources={
        <div>
          <a
            href="https://github.com/AdaptableTools/adaptable/blob/master/packages/adaptable/readme/Functions/dashboard_function.md"
            target="_blank"
          >
            Read Me
          </a>{' '}
          |{' '}
          <a
            href="https://api.adaptabletools.com/interfaces/_src_predefinedconfig_dashboardstate_.dashboardstate.html"
            target="_blank"
          >
            Predefined Config
          </a>{' '}
          |{' '}
          <a
            href="https://api.adaptabletools.com/interfaces/_src_api_dashboardapi_.dashboardapi.html"
            target="_blank"
          >
            Adaptable API
          </a>
        </div>
      }
    />
  );
};
