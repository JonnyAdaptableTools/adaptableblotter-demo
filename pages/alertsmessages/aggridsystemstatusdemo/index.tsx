import React from 'react';
import DynamicDemoPage from '../../../src/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/aggridsystemstatusdemo')}
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
            message. (Turn it off by setting <i>ShowSystemStatusButton</i> to
            false in{' '}
            <a
              href="https://adaptabletools.zendesk.com/hc/en-us/articles/360028901111-Dashboard-Config"
              target="_blank"
            >
              Dashboard Config
            </a>
            ).
          </p>
          <p>
            You set System Status messages through code using the{' '}
            <a
              href="https://adaptabletools.zendesk.com/hc/en-us/articles/360028899471-System-Status-API"
              target="_blank"
            >
              Adaptable Blotter API
            </a>
            . In this example we set an error message as follows:{' '}
            <i>
              blotter.api.systemStatusApi.setRedSystemStatus('Server about to
              restart');
            </i>
          </p>
          <p>
            <b>Adaptable Blotter Help Resources:</b>{' '}
            <a
              href="https://adaptabletools.zendesk.com/hc/en-us/articles/360026222612-Reminders"
              target="_blank"
            >
              User Guide
            </a>
            ,{' '}
            <a
              href="https://adaptabletools.zendesk.com/hc/en-us/articles/360028587312-Reminder-Config"
              target="_blank"
            >
              Predefined Config
            </a>
          </p>
        </div>
      }
    />
  );
};
