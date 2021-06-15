import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/export/aggridexportformatvaluesdemo')}
      pageTitle={'Export Format Values Demo'}
      description={
        <div>
          <p>
            Many AdapTable users wish to export data showing the actual display
            value in the Grid, but others want to export only the raw value.{' '}
          </p>
          <p>
            This is a common request if, for example, a number has been
            formatted to show a currency sign but the data should just contain
            the number.
          </p>
          <p>
            For this reason you can specify - the <i>exportFormatType</i> in{' '}
            <a
              href="https://docs.adaptabletools.com/docs/adaptable-options/export-options"
              target="_blank"
            >
              Export Options
            </a>{' '}
            - whether to export 'raw value' or 'formatted value'
          </p>
          <p>
            {' '}
            <a
              href="https://docs.adaptabletools.com/docs/adaptable-modules/export-module/#exporting-formatted-data"
              target="_blank"
            >
              You can specify a rule
            </a>{' '}
            for all columns or, for a more granular approach by Column data type
            (strings, numbers and dates).
          </p>
          <p>
            Dates have an extra option - <i>exportDateFormat</i> - which will
            export all Date columns in the given format (overriding what has
            been set in exportFormatType).{' '}
          </p>
          <p>
            In this demo we have set the following Export formats:
            <ul>
              <li>
                Numeric Columns: <b>Raw Value</b> -<i>Package Cost</i>,
                <i>Item Cost</i> and <i>Order Cost</i> all have '£' prefix, but
                the exported data drops this in favour of raw value
              </li>
              <li>
                String Columns: <b>Formatted Value</b> - <i>Employee</i> exports
                in caps and <i>Ship Via</i> in sentence case to match how they
                are formatted in the Grid
              </li>
              <li>
                {' '}
                Date Columns: <b>uses 'exportDateFormat' property</b> -{' '}
                <i>Order Date</i>, <i>Required Date</i> and <i>Shipped Date</i>{' '}
                have separate Formats, but all export using supplied value of
                'MM/dd/yyyy'
              </li>
            </ul>
          </p>
        </div>
      }
      helpResources={
        <div>
          <a
            href="https://docs.adaptabletools.com/docs/adaptable-modules/export-module"
            target="_blank"
          >
            Export Module
          </a>
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/adaptable-options/export-options"
            target="_blank"
          >
            Export Options
          </a>{' '}
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/predefined-config/export-config"
            target="_blank"
          >
            Export Config
          </a>{' '}
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/adaptable-api/export-api"
            target="_blank"
          >
            Export Api
          </a>
        </div>
      }
    />
  );
};
