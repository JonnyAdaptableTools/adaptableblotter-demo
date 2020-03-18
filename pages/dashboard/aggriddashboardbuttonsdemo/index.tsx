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
            The 'VisibleButtons' property of Dashboard Predefined Config allows
            you to specify which buttons are visible in the Dashboard Header.
          </p>
          <p>
            By default, AdapTable will show the 'SystemStatus', 'GridInfo',
            'ColumnChooser' and 'ConditionalStyle' icons.
          </p>
          <p>
            In this example we have set the 'CellValidation', 'BulkUpdate',
            'SmartEdit', 'Alert' and 'Reminder' buttons to be visible.
          </p>
        </div>
      }
      helpResources={
        <div>
          <a
            href="https://api.adaptabletools.com/interfaces/_src_predefinedconfig_dashboardstate_.dashboardstate.html"
            target="_blank"
          >
            Predefined Config
          </a>
          ,{' '}
          <a
            href="https://api.adaptabletools.com/interfaces/_src_api_dashboardapi_.dashboardapi.html"
            target="_blank"
          >
            Adaptable API
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
        </div>
      }
    />
  );
};
