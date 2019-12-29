import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/grid/aggridexportdemo')}
      pageTitle={'Export Demo'}
      description={
        <div>
          <h4>Export and Reports Demo</h4>
          <p>
            You can export your data from the Grid via Reports. There are 3
            which ship with the Blotter (All Rows, All Visible Rows, Selected
            Cells) and you can create your own.
          </p>
          <p>
            If using the Adaptable Blotter with our partners OpenFin, Glue42 or
            iPushPull you can see exported data update in real time as your Grid
            ticks. You can also schedule reports to export at particular times.
          </p>
          <p>
            This example has 2 reports: 'My Team Big Invoice' which exports all
            columns but only those rows that match the query, and 'Current
            Orders' which exports a subset of columns and all rows visible when
            the report is run. Note this report is also scheduled to run
            (exporting to CSV) automatically every day at 17:30 (you can edit
            the schedule to see it run at a time you provide).
          </p>
          <p>
            <b>Adaptable Help Resources:</b>{' '}
            <a
              href="https://api.adaptableblotter.com/interfaces/_predefinedconfig_exportstate_.exportstate.html"
              target="_blank"
            >
              Predefined Config
            </a>
            ,{' '}
            <a
              href="https://api.adaptableblotter.com/interfaces/_api_exportapi_.exportapi.html"
              target="_blank"
            >
              Blotter API
            </a>
            ,{' '}
            <a
              href="https://adaptabletools.zendesk.com/hc/en-us/articles/360002179358-Export-FAQ"
              target="_blank"
            >
              FAQ
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
