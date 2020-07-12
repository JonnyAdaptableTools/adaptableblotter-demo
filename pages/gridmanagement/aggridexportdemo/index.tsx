import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/grid/aggridexportdemo')}
      pageTitle={'Export and Reports Demo'}
      description={
        <div>
          <p>
            You can export your grid data from AdapTable via <b>Reports</b> -
            either pre-shipped or custom created - to a number of different
            destinations.
          </p>
          <p>
            AdapTable ships with 4 reports or you can create your own via the
            Report Wizard. The shipped Reports are:{' '}
          </p>
          <ul>
            <li>
              <b>All Data</b>: All the data in the grid's data source
              (irrespective of whether it is currently visible)
            </li>
            <li>
              <b>Visible Data</b>: All the data currently displayed in the grid
              (if exported to Excel it will include grouped row information)
            </li>
            <li>
              <b>Selected Cells</b>: All cells currently selected in the grid
              (they do not need to be contiguous)
            </li>
            <li>
              <b>Selected Rows</b>: Any rows currently selected in the grid.
            </li>
          </ul>{' '}
          <p>
            Each report can be exported to a number of different destinations,
            namely:{' '}
          </p>
          <ul>
            <li>
              <b>Excel</b>: Opens an Excel file with the report data (if the
              report is 'Visible Data' grouping information will be included)
            </li>
            <li>
              <b>CSV</b>: Standard CSV format (comma separated)
            </li>
            <li>
              <b>Clipboard</b>: Including Column headers
            </li>
            <li>
              <b>JSON</b>: As an array of arrays
            </li>
            <li>
              <b>ipushpull</b>: Sends data to ipushpull and from there to
              Symphony and elsewhere - see{' '}
              <a href="../partners/ipushpulldemo">ipushpull demo</a> (requires
              ipushpull Plugin)
            </li>
            <li>
              <b>Glue42</b>: Sends data to excel via Glue42 ensuring 2 way data
              updates and full validation while editing in Excel (requires
              Glue42 Plugin)
            </li>
            <li>
              <b>Excel (via OpenFin)</b>: Sends data to excel via OpenFin
              ensuring Excel updates automatically as the grid ticks (requires
              OpenFin Plugin)
            </li>
          </ul>{' '}
          <p>
            You can schedule reports so that they export at particular times
            (e.g. on a certain date, or daily at a particular time).
          </p>
          <p>This example has 2 bespoke Reports:</p>{' '}
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
            href="https://api.adaptabletools.com/interfaces/_src_predefinedconfig_exportstate_.exportstate.html"
            target="_blank"
          >
            Export Config
          </a>{' '}
          |{' '}
          <a
            href="https://api.adaptabletools.com/interfaces/_src_api_exportapi_.exportapi.html"
            target="_blank"
          >
            Export Api
          </a>
          |{' '}
          <a
            href="https://github.com/AdaptableTools/adaptable/blob/master/packages/adaptable/readme/functions/export-function.md"
            target="_blank"
          >
            Export Read Me
          </a>
          |{' '}
          <a
            href="https://api.adaptabletools.com/interfaces/_src_adaptableoptions_exportoptions_.exportoptions.html"
            target="_blank"
          >
            Export Options
          </a>
        </div>
      }
    />
  );
};
