import React from 'react';
import DynamicDemoPage from '../../../src/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/aggridformatcolumndemo')}
      pageTitle={'Format Column Demo'}
      description={
        <div>
          <h4>AdaptableBlotter.JS - Format Column Demo</h4>
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
            This example has 2 Format Columns: The 'Order Id' column is lime
            green with a red fore colour, and the 'Order Date' column is
            italicised with a smaller font.
          </p>
          <p>
            <b>Adaptable Blotter Help Resources:</b>{' '}
            <a
              href="https://adaptabletools.zendesk.com/hc/en-us/articles/360005168211-Format-Column"
              target="_blank"
            >
              User Guide
            </a>
            ,{' '}
            <a
              href="https://adaptabletools.zendesk.com/hc/en-us/articles/360028899391-Format-Column-API"
              target="_blank"
            >
              Blotter API
            </a>
            ,{' '}
            <a
              href="https://adaptabletools.zendesk.com/hc/en-us/articles/360009005111-Format-Column-FAQ"
              target="_blank"
            >
              FAQ
            </a>
            , and{' '}
            <a
              href="https://adaptabletools.zendesk.com/hc/en-us/articles/360028638052-Cell-Validation-Videos"
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
