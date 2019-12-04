import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/alerts/aggridsystemstatusdemo')}
      pageTitle={'Reminder Demo'}
      description={
        <div>
          <h4>System Status Demo</h4>
          <p>
            The System Status button in the Home Toolbar is provided for you to
            show messages to your Users at run-time if something important has
            happened to the system or server they need to know about.
          </p>
          <p>
            Messages can be <b>Success</b> (by default green), <b>Warning</b>{' '}
            (by default amber), <b>Error</b> (by default red) or <b>Info</b>(by
            default blue). Clicking the button will display the message.{' '}
          </p>
          <p>
            You can provide default and start-up messages (and message types)
            and also choose whether an Alert will be displayed when the System
            Status changes (to anything other than default).
          </p>
          <p>
            You can hide the System Status button by setting{' '}
            <i>ShowSystemStatusButton</i> to false in{' '}
            <a
              href="https://api.adaptableblotter.com/interfaces/_predefinedconfig_dashboardstate_.dashboardstate.html"
              target="_blank"
            >
              Dashboard State
            </a>
            . There is also a System Status toolbar if you want to see the
            message permanently.
          </p>
          <p>
            You set System Status messages through code using the{' '}
            <a
              href="https://api.adaptableblotter.com/interfaces/_api_systemstatusapi_.systemstatusapi.html"
              target="_blank"
            >
              Blotter API
            </a>
            . In this example we set info, warning, success and error messages
            through the API - using Application Buttons in{' '}
            <a
              href="../../dashboard/aggriddashboardapplicationtoolbardemo"
              target="_blank"
            >
              Application Toolbar
            </a>
            .
          </p>

          <p>
            <b>Adaptable Blotter Help Resources:</b>{' '}
            <a
              href="https://api.adaptableblotter.com/interfaces/_api_systemstatusapi_.systemstatusapi.html"
              target="_blank"
            >
              Blotter API
            </a>
            ,{' '}
            <a
              href="https://adaptabletools.zendesk.com/hc/en-us/articles/360002754957-Messages-and-Alerts"
              target="_blank"
            >
              User Guide
            </a>
            .
          </p>
        </div>
      }
    />
  );
};
