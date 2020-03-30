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
            (amber), <b>Error</b> (red) or <b>Info</b> (blue). Clicking the
            button will display the message.{' '}
          </p>
          <p>
            You can provide default and start-up messages (and message types)
            and also choose whether an Alert will be displayed when the System
            Status changes (to anything other than default).
          </p>
          <p>
            You can set the System Status through{' '}
            <a
              href="https://api.adaptabletools.com/interfaces/_src_predefinedconfig_dashboardstate_.dashboardstate.html"
              target="_blank"
            >
              Dashboard State
            </a>{' '}
            and see the System Status in 3 ways: via the System Status button in
            the Dashboard Header or via the System Status toolbar and tool
            panel.
          </p>
          <p>
            You set System Status messages through code using the{' '}
            <a
              href="https://api.adaptabletools.com/interfaces/_src_api_systemstatusapi_.systemstatusapi.html"
              target="_blank"
            >
              Adaptable API
            </a>
            . In this example we set info, warning, success and error messages
            through the API - using Buttons in a{' '}
            <a
              href="../../dashboard/aggriddashboardcustomtoolbarsdemo"
              target="_blank"
            >
              Custom Toolbar
            </a>
            .
          </p>
        </div>
      }
      helpResources={
        <div>
          <a
            href="https://api.adaptabletools.com/interfaces/_src_predefinedconfig_systemstatusstate_.systemstatusstate.html"
            target="_blank"
          >
            Predefined Config
          </a>
          ,{' '}
          <a
            href="https://api.adaptabletools.com/interfaces/_src_api_systemstatusapi_.systemstatusapi.html"
            target="_blank"
          >
            Adaptable API
          </a>
        </div>
      }
    />
  );
};
