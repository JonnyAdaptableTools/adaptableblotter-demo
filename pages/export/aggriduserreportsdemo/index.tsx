import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/export/aggriduserreportsdemo')}
      pageTitle={'User Reports Demo'}
      description={
        <div>
          <p>
            AdapTable enables Users to create <b>User Reports</b> which define
            exactly which rows and columns should be exported.
          </p>
          <p>
            User Reports can be created either at design time (through
            Predefined Config) or at run-time (via the Report Wizard).{' '}
          </p>
          <p>Each User Report contains 2 collections:</p>{' '}
          <ul>
            <li>
              <i>Columns to export</i>: This can be a bespoke list, 'All
              Columns' or 'Visible Columns'{' '}
            </li>
            <li>
              <i>Rows to export</i>: This can be a bespoke Query which will
              contain a custom 'Query' that is invoked each time the Report is
              run, 'All Rows' or 'Visible Rows'
            </li>
          </ul>
          <p>This example has 2 User Reports:</p>{' '}
          <ol>
            <li>
              <i>My Team Big Invoice</i> exports all columns but only those rows
              that match the query
            </li>
            <li>
              <i>Current Orders</i> exports a subset of columns and all rows
              visible when the report is run - this report is also scheduled to
              run (exporting to CSV) every day at 17:30
            </li>
          </ol>
        </div>
      }
      helpResources={
        <div>
          <a
            href="https://docs.adaptabletools.com/docs/adaptable-functions/export-function"
            target="_blank"
          >
            Export Function
          </a>
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/predefined-config/export-config"
            target="_blank"
          >
            Export Config
          </a>{' '}
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/adaptable-api/export-api"
            target="_blank"
          >
            Export Api
          </a>
        </div>
      }
    />
  );
};
