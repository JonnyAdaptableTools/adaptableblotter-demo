import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/admin/aggridauditdemo')}
      pageTitle={'Audit Log Demo'}
      description={
        <div>
          <h4>Audit Log Demo</h4>
          <p>
            Every grid event, mouse click, user action, cell edit etc. is
            auditable by the Adaptable Blotter and available for you to listen
            to and review - perfect for Support Teams or for data playback.
          </p>
          <p>
            You can choose to send any (or all) of <b>Cell Edit</b>,{' '}
            <b>User State</b>, <b>Function Applied</b> and <b>Internal State</b>{' '}
            changes to the Audit Log.{' '}
          </p>
          <p>
            And you can decide how the Audit Log will make these messages
            available: stream to an HTTP Channel, log to the Console or fire an
            event.
          </p>
          <p>
            This example fires Cell Edit, User State and Function Applied events
            to the Console; open the Console in Developer Tools and see the
            messages appear as you edit data and create objects in the Blotter.
          </p>
          <p>
            <b>Adaptable Help Resources:</b>{' '}
            <a
              href="https://adaptabletools.zendesk.com/hc/en-us/articles/360028585212-Audit-Events-API"
              target="_blank"
            >
              Blotter API
            </a>
            ,{' '}
            <a
              href="https://adaptabletools.zendesk.com/hc/en-us/articles/360008819232-Audit-Log-FAQ"
              target="_blank"
            >
              FAQ
            </a>
            ,{' '}
            <a
              href="https://adaptabletools.zendesk.com/hc/en-us/articles/360002754518-Audit-Log"
              target="_blank"
            >
              User Guide
            </a>
          </p>
        </div>
      }
    />
  );
};
