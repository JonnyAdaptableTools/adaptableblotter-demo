import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/finance/financecellsummarydemo')}
      pageTitle={'Finance Cell Summary Demo'}
      description={
        <div>
          <p>
            When using the{' '}
            <a
              href="https://docs.adaptabletools.com/docs/plugins/finance/finance-plugin"
              target="_blank"
            >
              Financial plugin
            </a>{' '}
            AdapTable includes 3 extra Cell Summaries for numeric columns -
            designed for finance users. These are:
          </p>
          <ul>
            <li>
              <b>WeightedAverage: </b>Returns true if all selected cells (in a
              single column) match
            </li>
            <li>
              <b>VWAP: </b>Runs VWAP analysis (requires selection of 2
              contiguous columns)
            </li>
            <li>
              <b>Only: </b>Calculates the Weighted Average (requires selection
              of 2 contiguous columns)
            </li>
          </ul>
          <p>
            Open the Cell Summary dropdown and see this additional 3 entries are
            present.
          </p>
        </div>
      }
      helpResources={
        <div>
          <a
            href="https://docs.adaptabletools.com/docs/plugins/finance/finance-plugin"
            target="_blank"
          >
            Finance Plugin
          </a>{' '}
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/adaptable-functions/cell-summary-function"
            target="_blank"
          >
            Cell Summary Read Me
          </a>{' '}
        </div>
      }
    />
  );
};
