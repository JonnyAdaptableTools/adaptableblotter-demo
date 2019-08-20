import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/style/aggridformatcolumndemo')}
      pageTitle={'Format Column Demo'}
      description={
        <div>
          <h4>Format Column Demo</h4>
          <p>
            Format Column allow you to style an entire column. Unlike
            Conditional Styles, the Format Column style is always applied,
            irrespective of the data in the cell.
          </p>
          <p>
            Format Columns are created using the same Style builder as Quick
            Search and Conditional Styles. Alternatively you can specify a css
            style name in Format Colunn Predefined Config (which you must
            provide).
          </p>
          <p>
            This example has 2 Format Columns: The <b>Order Id</b> column is
            lime green with a red fore colour, and the <b>Order Date</b> column
            is italicised with a smaller font.
          </p>

          <p>
            <b>Adaptable Blotter Help Resources:</b>{' '}
            <a
              href="https://adaptabletools.zendesk.com/hc/en-us/articles/360005168211-Format-Column"
              target="_blank"
            >
              User Guide
            </a>{' '}
            -{' '}
            <a
              href="https://api.adaptableblotter.com/interfaces/_predefinedconfig_runtimestate_formatcolumnstate_.formatcolumnstate.html"
              target="_blank"
            >
              Predefined Config
            </a>{' '}
            -{' '}
            <a
              href="https://api.adaptableblotter.com/interfaces/_api_interface_iformatcolumnapi_.iformatcolumnapi.html"
              target="_blank"
            >
              Blotter API
            </a>{' '}
            -{' '}
            <a
              href="https://adaptabletools.zendesk.com/hc/en-us/articles/360029742972-Format-Column-FAQ"
              target="_blank"
            >
              FAQ
            </a>{' '}
            -{' '}
            <a
              href="https://adaptabletools.zendesk.com/hc/en-us/articles/360030944471-Styling-Videos"
              target="_blank"
            >
              Videos
            </a>
            .
          </p>
        </div>
      }
    />
  );
};
