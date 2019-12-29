import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/dashboard/aggriddashboardbuttonsdemo')}
      pageTitle={'Dashboard Buttons Demo'}
      description={
        <div>
          <h4>Dashboard Buttons Demo</h4>
          <p>
            As part of Dashboard Predefined Config you can specify which buttons
            and dropdowns are visible in the 'Home' toolbar (the one on the
            extreme left).
          </p>
          <p>
            In this example we have set the 'Dashboard', 'ColumnChooser',
            'Chart', 'SmartEdit', 'Alert' and 'Reminder' buttons to be visible.
          </p>
          <p>
            We have chosen to hide the <i>About</i> and <i>System Status</i>{' '}
            buttons, and we have also opted to hide the <i>Columns</i> and{' '}
            <i>Toolbars</i> dropdowns.
          </p>
          <p>
            <b>Adaptable Help Resources:</b>{' '}
            <a
              href="https://api.adaptableblotter.com/interfaces/_predefinedconfig_dashboardstate_.dashboardstate.html"
              target="_blank"
            >
              Predefined Config
            </a>
            ,{' '}
            <a
              href="https://api.adaptableblotter.com/interfaces/_api_dashboardapi_.dashboardapi.html"
              target="_blank"
            >
              Blotter API
            </a>
            ,{' '}
            <a
              href="https://adaptabletools.zendesk.com/hc/en-us/articles/360029743092-Dashboard-FAQ"
              target="_blank"
            >
              FAQ
            </a>
            ,{' '}
            <a
              href="https://adaptabletools.zendesk.com/hc/en-us/articles/360030944511-Dashboard-Videos"
              target="_blank"
            >
              Videos
            </a>
            ,{' '}
            <a
              href="https://adaptabletools.zendesk.com/hc/en-us/articles/360002755177-Styling-Functions"
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
