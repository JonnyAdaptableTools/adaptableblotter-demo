import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/formatcolumn/aggridpercentbardemo')}
      pageTitle={'Percent Bar Demo'}
      description={
        <div>
          <p>
            Percent Bars enable you to see numeric data as bar, where the cell
            is filled as a % of its value against the maximum value for the
            column.
          </p>
          <p>
            A Percent Bar can be created in one of 2 ways:
            <ul>
              <li>
                <b>Ranges</b>: will colour the cell depending on which Range the
                cell value falls in - this allows a traffic light effect for
                example; there is no limit on the number of Ranges.{' '}
              </li>
              <li>
                <b>Column Comparison</b>: will colour the cell based on another
                Column in the same Row; you can set the MinValue, MaxValue or
                both to be the name of the other column.
              </li>
            </ul>
          </p>
          <p>
            Other{' '}
            <a
              href="https://docs.adaptabletools.com/docs/predefined-config/format-column-config"
              target="_blank"
            >
              Config
            </a>{' '}
            options include a back colour for the Bar, whether to see the cell
            value, and whether to display that value as a percentage of the
            total.
          </p>
          <p>
            In this example we created 4 Percent Bars, 3 with Ranges and one
            with a Column Comparison:
          </p>
          <ul>
            <li>
              <b>Item Count</b> - using the default colours and a tooltip
              showing the cell value{' '}
            </li>
            <li>
              <b>Invoiced</b> - with 3 ranges: 0-500 (red), 500-1000 (orange)
              and 1000-2000 (green)
            </li>
            <li>
              <b>Item Cost</b> - with non-default range and background colours
              and displaying both the cell and percentage value
            </li>
            <li>
              <b>Package Cost</b> - using a Column Comparison with 0 as MinValue
              and 'OrderCost' Column as Max Value
            </li>
          </ul>
        </div>
      }
      helpResources={
        <div>
          <a
            href="https://docs.adaptabletools.com/docs/adaptable-modules/format-column-module"
            target="_blank"
          >
            Format Column Module
          </a>{' '}
        </div>
      }
    />
  );
};
