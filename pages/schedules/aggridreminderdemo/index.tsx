import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/schedules/aggridreminderdemo')}
      pageTitle={'Reminder Demo'}
      description={
        <div>
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
        </div>
      }
      helpResources={
        <div>
          <a
            href="https://docs.adaptabletools.com/docs/predefined-config/schedule-config"
            target="_blank"
          >
            Predefined Config
          </a>
        </div>
      }
    />
  );
};
