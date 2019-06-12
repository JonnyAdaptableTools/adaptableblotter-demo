import React from 'react';
import DynamicDemoPage from '../../../src/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/aggridadvancedsearchdemo')}
      pageTitle={'Advanced Search Demo'}
      description={
        <div>
          <h4>Advanced Search Demo</h4>
          <p>
            Advanced Search is a very powerful function that can run searches
            across mutliple columns which can then be named, saved and re-used.
          </p>
          <p>
            It uses the Adaptable Blotter Query (used in many Functions) that
            allows selections to be performed on a mix of Column Values, Filters
            and Ranges.
          </p>
          <p>
            In this example we are searching for any rows where the Invoiced
            Cost is over $350 (<i>Range</i>), for Orders this year (
            <i>Filter</i>) where the Employee is Janet, Margaret or Robert (
            <i>Column Values</i>).
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
