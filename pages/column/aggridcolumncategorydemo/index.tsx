import React from 'react';
import DynamicDemoPage from '../../../src/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/columns/aggridcolumncategorydemo')}
      pageTitle={'Column Category Demo'}
      description={
        <div>
          <h4>Column Category Demo</h4>
          <p>
            Column Categories are used when you have a very large number of
            columns that you want to manipulate more easily.
          </p>
          <p>
            The Column Chooser will spot if a column is in a Column Category and
            allow you to treat the whole group as a single item for purposes of
            visibility and placement.
          </p>
          <p>
            This example has 2 Column Categories ('Customer' and 'Address'). If
            you open the Column Chooser (the 4th icon in the toolbar) you can
            see them and you can add them as a group or individual columns.
          </p>
          <p>
            <b>Adaptable Blotter Help Resources:</b>{' '}
            <a
              href="https://adaptabletools.zendesk.com/hc/en-us/articles/360020202712-Column-Category"
              target="_blank"
            >
              User Guide
            </a>
            ,{' '}
            <a
              href="https://adaptabletools.zendesk.com/hc/en-us/articles/360028899231-Column-Category-API"
              target="_blank"
            >
              Blotter API
            </a>
          </p>
        </div>
      }
    />
  );
};
