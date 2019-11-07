import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/alerts/aggridreminderdemo')}
      pageTitle={'Reminder Demo'}
      description={
        <div>
          <h4>Reminder Demo</h4>
          <p>
            Create scheduled reminders so you dont forget to do important grid
            actions.
          </p>
          <p>
            Reminders are similar to Alerts (and look identical) but whereas
            Alerts fire when data changes, Reminders are shown at to a set time
            that you stipulate.
          </p>
          <p>
            This example has a Reminder that is set to fire every weekday at
            17:30 to remind the user to export data. Try: change the schedule in
            the Reminder so that it fires in 2 minutes time.
          </p>
          <p>
            <b>Adaptable Blotter Help Resources:</b>{' '}
            <a
              href="https://adaptabletools.zendesk.com/hc/en-us/articles/360028587312-Reminder-Config"
              target="_blank"
            >
              Predefined Config
            </a>
            ,{' '}
            <a
              href="https://adaptabletools.zendesk.com/hc/en-us/articles/360002755197-Grid-Functions"
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
