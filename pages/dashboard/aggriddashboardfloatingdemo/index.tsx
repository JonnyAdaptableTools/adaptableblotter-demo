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
              href="https://docs.adaptabletools.com/docs/predefined-config/dashboard-config#isfloating"
              target="_blank"
            >
              Dashboard Predefined Config
            </a>{' '}
            . This will reduce the Dashboard to a reduced header that you can
            move where you want.
          </p>
          <p>
            If you don't want the Dashboard ever to float then set the '
            <a
              href="https://docs.adaptabletools.com/docs/predefined-config/dashboard-config#canfloat"
              target="_blank"
            >
              CanFloat
            </a>
            ' property to false.
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
            href="https://docs.adaptabletools.com/docs/user-interface/dashboard"
            target="_blank"
          >
            Dashboard Read Me
          </a>{' '}
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/predefined-config/dashboard-config"
            target="_blank"
          >
            Dashboard Config
          </a>{' '}
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/adaptable-api/dashboard-api"
            target="_blank"
          >
            Dashboard Api
          </a>{' '}
          |{' '}
          <a href="https://youtu.be/KrahnLFYHjs" target="_blank">
            Dashboard Video
          </a>
        </div>
      }
    />
  );
};
