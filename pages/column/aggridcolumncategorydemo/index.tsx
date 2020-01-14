import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/column/aggridcolumncategorydemo')}
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
            <b>AdapTable Help Resources:</b>{' '}
            <a
              href="https://api.adaptableblotter.com/interfaces/_predefinedconfig_columncategorystate_.columncategorystate.html"
              target="_blank"
            >
              Predefined Config
            </a>
            ,{' '}
            <a
              href="https://api.adaptableblotter.com/interfaces/_api_columncategoryapi_.columncategoryapi.html"
              target="_blank"
            >
              Adaptable API
            </a>{' '}
            ,{' '}
            <a
              href="https://adaptabletools.zendesk.com/hc/en-us/articles/360030078511-Column-Category-Videos"
              target="_blank"
            >
              Videos
            </a>
            ,{' '}
            <a
              href="https://adaptabletools.zendesk.com/hc/en-us/articles/360002755157-Column-Management-Functions"
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
