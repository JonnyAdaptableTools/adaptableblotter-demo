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
            use (some of which work only on numeric columns) and you can provide
            your bespoke summaries.
          </p>
          <p>
            Try it: highlight a group of cells and see the value change in the
            Cell Summmary toolbar. Click the 'info' button to see results of all
            operations or change the selected one by using the dropdown.
          </p>{' '}
          <p>
            To create a Summary Operation: provide the name of the function,
            which will be evaluated each time the summary is run, in{' '}
            <a
              href="https://docs.adaptabletools.com/docs/predefined-config/cell-summary-config"
              target="_blank"
            >
              Cell Summary State
            </a>{' '}
            and the actual implementation as a{' '}
            <a
              href="https://docs.adaptabletools.com/docs/user-functions/cell-summary-operation-user-function"
              target="_blank"
            >
              Cell Summary Operation User Function
            </a>{' '}
            .
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
            href="https://docs.adaptabletools.com/docs/predefined-config/cell-summary-config"
            target="_blank"
          >
            Cell Summary Config
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
            href="https://docs.adaptabletools.com/docs/adaptable-functions/cell-summary-function"
            target="_blank"
          >
            Cell Summary Read Me
          </a>{' '}
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/user-functions/cell-summary-operation-user-function"
            target="_blank"
          >
            Cell Summary Operation User Function
          </a>{' '}
        </div>
      }
    />
  );
};
