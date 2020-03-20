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
            However you can change this via the <i>IsFloating</i> property in{' '}
            <a
              href="https://api.adaptabletools.com/interfaces/_src_predefinedconfig_dashboardstate_.dashboardstate.html#isfloating"
              target="_blank"
            >
              Dashboard Predefined Config
            </a>{' '}
            . This will reduce the Dashboard to a reduced header that you can
            move where you want.
          </p>
          <p>
            You can move in and out of Floating mode by either clicking the Name
            in the Header or the 'Dock' / 'Float' menu items in the Home
            dropdown.
          </p>
          <p>
            In this example we have set the Dashboard to floating; note that if
            you move the header around and then refresh the page, AdapTable will
            'remember' its last location.
          </p>
        </div>
      }
      helpResources={
        <div>
          <a
            href="https://github.com/AdaptableTools/adaptable/blob/master/packages/adaptable/readme/functions/dashboard-function.md"
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
