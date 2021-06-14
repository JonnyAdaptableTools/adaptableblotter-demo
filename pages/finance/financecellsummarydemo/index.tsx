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
            AdapTable includes 2 extra Cell Summaries for numeric columns -
            designed for finance users. These are:
          </p>
          <ul>
            <li>
              <b>WeightedAverage: </b>Shows the Weighted Average for any Columns
              that have been provided with the{' '}
              <a
                href="https://docs.adaptabletools.com/docs/plugins/finance/finance-plugin-options#weighted-average-columns"
                target="_blank"
              >
                Weighted Average
              </a>{' '}
              aggregation.
            </li>
            <li>
              <b>Only: </b>Returns true if all selected cells in a single column
              match
            </li>
          </ul>
          <p>
            Open the Cell Summary dropdown and see this additional 2 entries are
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
            href="https://docs.adaptabletools.com/docs/adaptable-modules/cell-summary-module"
            target="_blank"
          >
            Cell Summary Module
          </a>{' '}
        </div>
      }
    />
  );
};
