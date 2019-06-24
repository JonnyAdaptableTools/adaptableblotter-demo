import React from 'react';
import DynamicDemoPage from '../../../src/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/search/aggriddatasourcedemo')}
      pageTitle={'Data Source Demo'}
      description={
        <div>
          <h4>Data Source Selector Demo</h4>
          <p>
            Data Sources are lists of 'hard coded' names provided by you in
            Predefined Config to enable you to run Searches on the Server..
          </p>
          <p>
            When a Data Source is selected, the SearchedChanged event fires
            allowing you to perform serach on the server and return data to the
            Adaptable Blotter via the API.
          </p>
          <p>
            In this example we have created 4 Data Sources and we also listen to
            SearchedChanged and fire details to the console. Note: a release in
            the near future will provide parameterised queries for Data Sources.
          </p>
          <p>
            <b>Adaptable Blotter Help Resources:</b>{' '}
            <a
              href="https://adaptabletools.zendesk.com/hc/en-us/articles/360005167971-Data-Source-Selector"
              target="_blank"
            >
              User Guide
            </a>
            ,{' '}
            <a
              href="https://adaptabletools.zendesk.com/hc/en-us/articles/360028587352-DataSource-Config"
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
              href="https://adaptabletools.zendesk.com/hc/en-us/articles/360029055431-Data-Source-Selector-FAQ"
              target="_blank"
            >
              FAQ
            </a>{' '}
            and{' '}
            <a
              href="https://adaptabletools.zendesk.com/hc/en-us/articles/360024888631-Server-Searching"
              target="_blank"
            >
              Server Search
            </a>{' '}
            .
          </p>
        </div>
      }
    />
  );
};
