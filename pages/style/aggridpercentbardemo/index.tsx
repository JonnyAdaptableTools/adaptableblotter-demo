import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/style/aggridpercentbardemo')}
      pageTitle={'Percent Bar Demo'}
      description={
        <div>
          <p>
            Percent Bars enable you to see numeric data as bar, where the cell
            is filled as a % of its value against the maximum value for the
            column.
          </p>
          <p>
            You can create <b>Ranges</b> in the Percent Bar so the colour in the
            cell will vary depending on which range its value falls.{' '}
          </p>
          <p>
            Other options include a back colour for the Bar, whether to see the
            cell value, and whether to display that value as a percentage of the
            total.
          </p>
          <p>In this example we created 3 Percent Bars:</p>
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
          </ul>
        </div>
      }
      helpResources={
        <div>
          <a
            href="https://api.adaptabletools.com/interfaces/_src_predefinedconfig_percentbarstate_.percentbarstate.html"
            target="_blank"
          >
            Percent Bar Config
          </a>{' '}
          |{' '}
          <a
            href="https://api.adaptabletools.com/interfaces/_src_api_percentbarapi_.percentbarapi.html"
            target="_blank"
          >
            Percent Bar Api
          </a>
          |{' '}
          <a
            href="https://github.com/AdaptableTools/adaptable/blob/master/packages/adaptable/readme/functions/percent-bar-function.md"
            target="_blank"
          >
            Percent Bar Read Me
          </a>
        </div>
      }
    />
  );
};
