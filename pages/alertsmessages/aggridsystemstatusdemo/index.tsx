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
            Messages can be green ('success' and the default), blue ('info'),
            amber ('warning') or red ('error'). Clicking the button displays the
            message. (Hide the button by setting <i>ShowSystemStatusButton</i>{' '}
            to false in{' '}
            <a
              href="https://api.adaptableblotter.com/interfaces/_predefinedconfig_dashboardstate_.dashboardstate.html"
              target="_blank"
            >
              Dashboard State
            </a>
            ).
          </p>
          <p>
            You set System Status messages through code using the{' '}
            <a
              href="https://api.adaptableblotter.com/interfaces/_api_systemstatusapi_.systemstatusapi.html"
              target="_blank"
            >
              Adaptable Blotter API
            </a>
            . In this example we set an error message as follows:{' '}
            <i>
              blotterApi.systemStatusApi.setErrorSystemStatus('Server about to
              restart');
            </i>
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
