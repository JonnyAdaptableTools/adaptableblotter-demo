import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/style/aggridpercentbardemo')}
      pageTitle={'Percent Bar Demo'}
      description={
        <div>
          <h4>Percent Bar Demo</h4>
          <p>
            Create Percent Bars to see numeric data as bar, where the cell is
            filled as a % of its value against the maximum value for the column.
          </p>
          <p>
            Percent Bars work for both positive and negative values and you can
            choose whether to display the actual value. If the column is
            editable, then you can still edit it as normal.
          </p>
          <p>
            In this example we created 3 Percent Bars. The 'Change Last Order'
            Percent Bar automatically shows the negative values, while the 'Item
            Cost' one displays cell values as well as uses a non default colour.
          </p>
          <p>
            <b>Adaptable Help Resources:</b>{' '}
            <a
              href="https://api.adaptableblotter.com/interfaces/_predefinedconfig_percentbarstate_.percentbarstate.html"
              target="_blank"
            >
              Predefined Config
            </a>
            ,{' '}
            <a
              href="https://api.adaptableblotter.com/interfaces/_api_percentbarapi_.percentbarapi.html"
              target="_blank"
            >
              Blotter API
            </a>
            ,{' '}
            <a
              href="https://adaptabletools.zendesk.com/hc/en-us/articles/360003426058-Percent-Bar-FAQ"
              target="_blank"
            >
              FAQ
            </a>
            ,{' '}
            <a
              href="https://adaptabletools.zendesk.com/hc/en-us/articles/360030944551-Percent-Bar-Videos"
              target="_blank"
            >
              Videos
            </a>
            ,{' '}
            <a
              href="https://adaptabletools.zendesk.com/hc/en-us/articles/360002755177-Styling-Functions"
              target="_blank"
            >
              User Guide
            </a>
            .
          </p>
        </div>
      }
    />
  );
};
