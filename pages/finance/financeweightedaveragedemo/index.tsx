import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/finance/financeweightedaveragedemo')}
      pageTitle={'Finance Weighted Average Demo'}
      description={
        <div>
          <p>
            The{' '}
            <a
              href="https://docs.adaptabletools.com/docs/plugins/finance/finance-plugin"
              target="_blank"
            >
              Finance plugin
            </a>{' '}
            in AdapTable offers{' '}
            <a
              href="https://docs.adaptabletools.com/docs/plugins/finance/finance-plugin-options#weighted-average-columns"
              target="_blank"
            >
              Weighted Average Columns
            </a>
            , enabling you to aggregate using a{' '}
            <a
              href="https://www.investopedia.com/terms/w/weightedaverage.asp"
              target="_blank"
            >
              Weighted Average
            </a>{' '}
            calculation.
          </p>
          <p>
            You need to provide the Column on which the Aggregation will be
            performed and also the 'Data' Column - used in the calculation
            itself.
          </p>
          <p>
            Once you do that, AdapTable will create a Weighted Average
            calculation at all levels of grouping (and in Pivot Mode).
          </p>
          <p>
            In this (slightly contrived) demo we have created a Weighted Average
            for the <b>Item Cost</b> Column (using the <b>Item Count</b> column
            as the Data Column).
          </p>
          <p>
            Note how the Column is renamed to describe how it is weighted, and
            also that it appears in the <i>Values</i> section of ag-Grid's
            Column Tool Panel.
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
            href="https://docs.adaptabletools.com/docs/plugins/finance/finance-plugin-options#weighted-average-columns"
            target="_blank"
          >
            Weighted Average Column
          </a>{' '}
        </div>
      }
    />
  );
};
