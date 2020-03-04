import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/style/aggridformatcolumndemo')}
      pageTitle={'Format Column Demo'}
      description={
        <div>
          <p>
            Format Column allow you to style an entire column. Unlike
            Conditional Styles, the Format Column style is always applied,
            irrespective of the data in the cell.
          </p>
          <p>
            Format Columns are created using the same Style builder as Quick
            Search and Conditional Styles, which allows you to name key elements
            of the style.{' '}
          </p>
          <p>
            Alternatively you can specify a css style name in Format Colunn
            Predefined Config (which you must provide in your css).
          </p>
          <p>
            This example has 2 Format Columns: The <b>Order Id</b> column is
            lime green with a red fore colour, and the <b>Order Date</b> column
            is bold and italicised and with a smaller font.
          </p>
        </div>
      }
      helpResources={
        <div>
          <a
            href="https://api.adaptabletools.com/interfaces/_src_predefinedconfig_formatcolumnstate_.formatcolumnstate.html"
            target="_blank"
          >
            Predefined Config
          </a>
          ,{' '}
          <a
            href="https://api.adaptabletools.com/interfaces/_src_api_formatcolumnapi_.formatcolumnapi.html"
            target="_blank"
          >
            Adaptable API
          </a>
          ,{' '}
          <a
            href="https://adaptabletools.zendesk.com/hc/en-us/articles/360029742972-Format-Column-FAQ"
            target="_blank"
          >
            FAQ
          </a>
          ,{' '}
          <a
            href="https://adaptabletools.zendesk.com/hc/en-us/articles/360030944471-Styling-Videos"
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
        </div>
      }
    />
  );
};
