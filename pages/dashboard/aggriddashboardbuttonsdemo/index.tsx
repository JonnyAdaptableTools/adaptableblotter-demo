import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/dashboard/aggriddashboardbuttonsdemo')}
      pageTitle={'Dashboard Buttons Demo'}
      description={
        <div>
          <p>
            The <b>ModuleButtons</b> property of Dashboard Predefined Config
            allows you to specify which Module buttons are visible in the
            Dashboard Header.
          </p>
          <p>
            By default, AdapTable will show the 'SystemStatus', 'GridInfo',
            'Layout' and 'ConditionalStyle' icons, but any array can provided
            (or any empty array to display none).
          </p>
          <p>
            In this example we have set the 'BulkUpdate', 'SmartEdit', 'Alert'
            and 'Reminder' buttons to be visible.
          </p>
          <p>
            The Quick Search texbox enables you to quickly search the grid; set{' '}
            <i>showQuickSearchInHeader</i> to false in{' '}
            <a
              href="https://docs.adaptabletools.com/docs/adaptable-options/dashboard-options"
              target="_blank"
            >
              Dashboard Options
            </a>{' '}
            if you don't want this to be visible.
          </p>{' '}
          <p>
            The 'Configure Dashboard' option in the main Menu allows you
            configure the Dashboard including which Module Buttons to display.
          </p>
          <p>
            Note: You can also include custom buttons in the Dashboard by
            populating the <b>customDashboardButtons</b> property in{' '}
            <a
              href="https://docs.adaptabletools.com/docs/adaptable-options/dashboard-options"
              target="_blank"
            >
              Dashboard Options
            </a>{' '}
            - see the{' '}
            <a href="./aggriddashboardcustombuttonsdemo">Custom Buttons demo</a>{' '}
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
            href="https://docs.adaptabletools.com/docs/adaptable-options/dashboard-options"
            target="_blank"
          >
            Dashboard Options
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
