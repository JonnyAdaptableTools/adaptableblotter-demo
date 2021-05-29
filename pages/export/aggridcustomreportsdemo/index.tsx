import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/export/aggridcustomreportsdemo')}
      pageTitle={'Custom Reports Demo'}
      description={
        <div>
          <p>
            Unlike{' '}
            <a href="./aggridsystemreportsdemo" target="_self">
              System Reports
            </a>{' '}
            and{' '}
            <a href="./aggriduserreportsdemo" target="_self">
              User Reports
            </a>{' '}
            , <b>Custom Reports</b> - also offered by AdapTable - do not need to
            include data (or columns) present in the grid in the exported data
            set.
          </p>
          <p>
            Instead the data in the export is fetched each time the report is
            run via a function provided as a{' '}
            <a
              href="https://docs.adaptabletools.com/docs/user-functions/custom-report-user-function"
              target="_blank"
            >
              Custom Report User Function
            </a>{' '}
            (and referenced in{' '}
            <a
              href="https://docs.adaptabletools.com/docs/predefined-config/export-config"
              target="_blank"
            >
              Export Predefined Config
            </a>
            ) .
          </p>
          <p>
            This allows developers to provide their own reports but leverage
            AdapTable state, scheduling and report destinations.
          </p>
          <p>
            This example includes a Custom Report entitled <i>People Report</i>{' '}
            with 3 columns and 4 rows of data - none of which are contained in
            the current grid.
          </p>
          <p>
            Note that not every cell needs to have data, but it needs to be
            present in the data (which is an array or arrays) so that all the
            rows match the provided columns.
          </p>
          <p>
            Additionally, this report is scheduled to run (exporting to CSV)
            every day at 17:30
          </p>
        </div>
      }
      helpResources={
        <div>
          <a
            href="https://v9-0--docs-adaptabletools.netlify.app/docs/adaptable-modules/export-module"
            target="_blank"
          >
            Export Module
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
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/user-functions/custom-report-user-function"
            target="_blank"
          >
            Custom Report User Function
          </a>{' '}
        </div>
      }
    />
  );
};
