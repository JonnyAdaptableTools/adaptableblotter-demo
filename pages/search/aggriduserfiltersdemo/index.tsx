import React from 'react';
import DynamicDemoPage from '../../../src/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/aggriduserfiltersdemo')}
      pageTitle={'User Filters Demo'}
      description={
        <div>
          <h4>User Filters</h4>
          <p>
            User Filters are, essentially, saved and named Column Filters that
            you can re-use throughout the application.
          </p>
          <p>
            By creating a User Filter, you are able to define a particular set
            of column data that has specific meaning to you and then use it not
            only as a column filter, but also in queries more generally.
          </p>
          <p>
            In this example we create 2 User Filters: <i>My Team</i> in the
            'Employee' column that we then re-use a Column Filter, and{' '}
            <i>Small Invoices</i> on the 'Invoiced' Column that we re-use in a
            Conditional Style.{' '}
          </p>
          <p>
            We use both the User Filters in the 'Team Small Invoices' Report
            which is the currently selected Export.
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
