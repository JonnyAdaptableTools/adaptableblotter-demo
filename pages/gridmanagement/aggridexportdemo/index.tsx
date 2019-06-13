import React from 'react';
import DynamicDemoPage from '../../../src/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/aggridexportdemo')}
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
            <b>Adaptable Blotter Help Resources:</b>{' '}
            <a
              href="https://adaptabletools.zendesk.com/hc/en-us/articles/360005168011-Export"
              target="_blank"
            >
              User Guide
            </a>
            ,{' '}
            <a
              href="https://adaptabletools.zendesk.com/hc/en-us/articles/360028587292-Export-Config"
              target="_blank"
            >
              Predefined Config
            </a>
            ,{' '}
            <a
              href="https://adaptabletools.zendesk.com/hc/en-us/articles/360028585392-Export-API"
              target="_blank"
            >
              Blotter API
            </a>
            ,{' '}
            <a
              href="https://adaptabletools.zendesk.com/hc/en-us/articles/360008819072-Export-FAQ"
              target="_blank"
            >
              FAQ
            </a>
          </p>
        </div>
      }
    />
  );
};
