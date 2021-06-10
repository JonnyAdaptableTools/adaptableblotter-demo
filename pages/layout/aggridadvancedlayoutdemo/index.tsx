import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/layout/aggridadvancedlayoutdemo')}
      pageTitle={'Advanced Layout Demo'}
      description={
        <div>
          <p>This example contains 6 layouts of different kinds: </p>
          <ol>
            <li>
              {' '}
              <b>Simple Layout</b>: a basic layout but which includes a
              Calculated Column (<i>Avg Item Cost</i>) and a FreeText Column (
              <i>Comments</i>){' '}
            </li>
            <li>
              {' '}
              <b>Col Widths Layout</b>: a layout where 2 columns (<i>OrderId</i>{' '}
              and <i>Comments</i>) are given wider initial widths.
            </li>
            <li>
              {' '}
              <b>Sorting Layout</b>: a layout which contains 2 sorted columns (
              <i>ShipName</i> and <i>ShipVia</i>), the latter of which also has
              a Custom Sort.
            </li>
            <li>
              {' '}
              <b>Grouping Layout</b>: which groups on the <i>Employee</i> and{' '}
              <i>Ship Country</i> columns
            </li>
            <li>
              {' '}
              <b>Pivoting Layout</b> which defines the following pivoting
              definition:
              <ul>
                <li>
                  Pivot on the <i>ShipVia</i> column (the <b>PivotColumns</b>{' '}
                  property) - note that we automatically uses the Custom Sort
                  defined for that this column.
                </li>
                <li>
                  Group on the <i>Employee</i> column (the{' '}
                  <b>RowGroupedColumns</b> property)
                </li>
                <li>
                  Show aggregation totals for the <i>InvoicedCost</i> (sum) and{' '}
                  <i>ItemCost</i> (avg) columns (the <b>AggregationColumns</b>{' '}
                  property)
                </li>
              </ul>
            </li>

            <li>
              {' '}
              <b>Advanced Layout</b>: bit of everything
            </li>
          </ol>{' '}
          <p>
            Note: we have set <b>groupIncludeTotalFooter</b> to <i>true</i> in{' '}
            <a
              href="https://www.ag-grid.com/javascript-grid-properties/"
              target="_blank"
            >
              GridOptions
            </a>{' '}
            so that it always appears (even when grid is <b>not</b> row grouped)
            and added these aggregations: 'ItemCost', 'InvoicedCost': sum,
            'ItemCount': avg
          </p>
        </div>
      }
      helpResources={
        <div>
          <a
            href="https://docs.adaptabletools.com/docs/adaptable-modules/layout-module"
            target="_blank"
          >
            Layout Module
          </a>{' '}
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/predefined-config/layout-config"
            target="_blank"
          >
            Layout Config
          </a>{' '}
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/adaptable-options/layout-options"
            target="_blank"
          >
            Layout Options
          </a>{' '}
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/adaptable-api/layout-api"
            target="_blank"
          >
            Layout Api
          </a>{' '}
        </div>
      }
    />
  );
};
