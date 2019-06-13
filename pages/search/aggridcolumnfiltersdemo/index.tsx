import React from 'react';
import DynamicDemoPage from '../../../src/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/aggridcolumnfiltersdemo')}
      pageTitle={'Column Filters Demo'}
      description={
        <div>
          <h4>Column Filters Demo</h4>
          <p>
            Each (filterable) column has a filters tab in the Column Menu (the
            second option). Alternatively you can click on the filter icon next
            to the filter bar if its showing.
          </p>
          <p>
            You can create a Column Filter by selecting column values and
            filters (items in the long list) and / or create a range (e.g. > 15)
            by using the operator dropdown at the top.
          </p>
          <p>
            In this example we create filters on 3 columns: Employee (3
            selected), Order Date ('This Year' filter) and Invoiced ('Between
            10-300' range). Edit / clear filters in the individual columns or
            via the Column Filter toolbar.
          </p>
          <p>
            Note: You can show / hide the Quick Filter bar through the Column
            Menu or by clicking the last button in the Column Filter toolbar.
          </p>
          <p>
            <b>Adaptable Blotter Help Resources:</b>{' '}
            <a
              href="https://adaptabletools.zendesk.com/hc/en-us/articles/360005167931-Advanced-Search"
              target="_blank"
            >
              User Guide
            </a>
            ,{' '}
            <a
              href="https://adaptabletools.zendesk.com/hc/en-us/articles/360028900991-Advanced-Search-Config"
              target="_blank"
            >
              Predefined Config
            </a>
            ,{' '}
            <a
              href="https://adaptabletools.zendesk.com/hc/en-us/articles/360028585192-Advanced-Search-API"
              target="_blank"
            >
              Blotter API
            </a>
            ,{' '}
            <a
              href="https://adaptabletools.zendesk.com/hc/en-us/articles/360009004951-Advanced-Search-FAQ"
              target="_blank"
            >
              FAQ
            </a>
            ,{' '}
            <a
              href="https://adaptabletools.zendesk.com/hc/en-us/articles/360005113032-Queries"
              target="_blank"
            >
              Queries
            </a>{' '}
            and{' '}
            <a
              href="https://adaptabletools.zendesk.com/hc/en-us/articles/360028637652-Advanced-Search-Videos"
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
