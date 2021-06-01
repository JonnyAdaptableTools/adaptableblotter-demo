import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/grid/aggridcellsummarydemo')}
      pageTitle={'Cell Summary Demo'}
      description={
        <div>
          <p>
            Use Cell Summary to see summary information about a group of
            selected cells using a variety of mathematical operations.
          </p>
          <p>
            AdapTable ships with a number of 'Summary Operations' that you can
            use (some of which work only on numeric columns)
          </p>
          <p>
            {' '}
            Try it: highlight a group of cells and see the value change in the
            Cell Summmary toolbar. Click the 'info' button to see results of all
            operations or change the selected one by using the dropdown.
          </p>
          <p>
            <b>Bespoke Cell Summaries</b>
            <br />
            You can provide custom summary definitions which will be evaluated
            each time the summary is run in the{' '}
            <a
              href="https://docs.adaptabletools.com/docs/adaptable-options/general-options"
              target="_blank"
            >
              General Options
            </a>{' '}
            section of Adaptable Options.{' '}
          </p>

          <p>
            In this example we have provided an 'Oldest' function which runs
            only on Date columns and returns the oldest date in the selection.
          </p>
        </div>
      }
      helpResources={
        <div>
          <a
            href="https://docs.adaptabletools.com/docs/adaptable-options/general-options"
            target="_blank"
          >
            General Options
          </a>{' '}
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/adaptable-api/cell-summary-api"
            target="_blank"
          >
            Cell Summary Api
          </a>{' '}
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/adaptable-modules/cell-summary-module"
            target="_blank"
          >
            Cell Summary Module
          </a>
        </div>
      }
    />
  );
};
