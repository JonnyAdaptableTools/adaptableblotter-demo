import React, { ReactNode } from 'react';
import MainPage from '../../src/MainPage';
import Link from 'next/link';

import './index.scss';
import GridLayout from '../../src/components/GridLayout';
import { getDemoPageStructure, DemoPage } from '../../DemoList/demolist';

import DemoBox from '../../src/components/DemoBox';

export default () => {
  let categoryPages = getDemoPageStructure().Categories.find(
    c => c.CategoryName == 'Export'
  )!.Pages;

  let demoLinks: any = categoryPages.map((page: DemoPage) => {
    return (
      <li>
        <b>{page.Name}: </b> {page.Description}
      </li>
    );
  });

  let demoBoxes: any = categoryPages.map((page: DemoPage) => {
    let title = page.Name + ' Demo';
    return (
      <DemoBox key={page.Name} href={page.Link}>
        {title}
      </DemoBox>
    );
  });
  return (
    <MainPage
      pageTitle={'Export demos'}
      description={
        <div>
          <h4>Export and Report Options</h4>
          <p>
            You can export your grid data from AdapTable via <b>Reports</b> -
            either pre-shipped or custom created - to a number of different
            destinations.
          </p>
          <p>There are 3 types of Reports you can export via AdapTable </p>
          <ul>
            <li>
              <b>System Reports</b>: These are reports that ship with AdapTable
              - include All Data, Visible Data and Selected Cells and Rows
            </li>
            <li>
              <b>User Reports</b>: Reports created at design-time or run-time
              which include an 'Expression' that will run a query against data
              in the grid each time the report is run.
            </li>
            <li>
              <b>Custom Reports</b>: Reports that run according to a function
              provided by devs at design-time; the data (or columns) do not
              consequently need to be in AdapTable when the report runs.
            </li>
          </ul>{' '}
          Click on the buttons below to see a demo for each of these types of
          reports.
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
        </div>
      }
    >
      <GridLayout>{demoBoxes}</GridLayout>
    </MainPage>
  );
};
