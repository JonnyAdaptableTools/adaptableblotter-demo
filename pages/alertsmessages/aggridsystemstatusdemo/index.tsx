import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/alerts/aggridsystemstatusdemo')}
      pageTitle={'System Status Demo'}
      description={
        <div>
          <p>
            The System Status function is provided for you to show messages to
            your Users at run-time if something important has happened to the
            system or server they need to know about.
          </p>
          <p>
            Messages can be <b>Success</b> (by default green), <b>Warning</b>{' '}
            (amber), <b>Error</b> (red) or <b>Info</b> (blue).{' '}
          </p>
          <p>
            The System Status Toolbar and ToolPanel show the most recent
            message, while the function popup displays all System Status
            messages.{' '}
          </p>{' '}
          <p>
            Other options allow an Alert to show when the System Status changes
            and a custom Div where Messages should be displayed (as provided
            here).
          </p>
          <p>
            If System Status is selected as a Visible Button in{' '}
            <a
              href="https://docs.adaptabletools.com/docs/predefined-config/dashboard-config"
              target="_blank"
            >
              Dashboard State
            </a>{' '}
            then it will display with colour corresponding to current Message
            Type.
          </p>
          <p>
            Set System Status messages through code using the{' '}
            <a
              href="https://docs.adaptabletools.com/docs/adaptable-api/system-status-api"
              target="_blank"
            >
              System Status section
            </a>{' '}
            of AdapTable Api.
          </p>
          <p>
            In this example we set info, warning, success and error messages
            using Dasbhoard Buttons in a{' '}
            <a href="../../dashboard/aggriddashboardcustomtoolbarsdemo">
              Custom Toolbar
            </a>{' '}
            and via entries in the{' '}
            <a href="../../menus/aggridcontextmenudemo">Context Menu</a>.
          </p>
        </div>
      }
      helpResources={
        <div>
          {' '}
          <a
            href="https://docs.adaptabletools.com/docs/adaptable-modules/system-status-module"
            target="_blank"
          >
            System Status Module
          </a>{' '}
        </div>
      }
    />
  );
};
