import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/alerts/aggridschedulesdemo')}
      pageTitle={'Schedules Demo'}
      description={
        <div>
          <p>
            The Schedule function 'wraps' all the functions that include
            scheduling functionality (i.e. Reminders, Export and ipushpull)
          </p>
          <p>
            You can use the Schedule function to create a new Schedule of any
            type and see all your schedules in one place.
          </p>
          <p>
            In this example we have scheduled a{' '}
            <a href="./aggridreminderdemo/">Reminder</a>, to display every
            Friday at 17:00 and we have scheduled a{' '}
            <a href="../../gridmanagement/aggridexportdemo/">Report</a> to run
            weekday at 12:30.
          </p>
        </div>
      }
      helpResources={
        <div>
          <a
            href="https://api.adaptabletools.com/interfaces/_src_predefinedconfig_schedulestate_.schedulestate.html"
            target="_blank"
          >
            Predefined Config
          </a>
          ,{' '}
          <a
            href="https://api.adaptabletools.com/interfaces/_src_api_scheduleapi_.scheduleapi.html"
            target="_blank"
          >
            Adaptable API
          </a>
          .
        </div>
      }
    />
  );
};
