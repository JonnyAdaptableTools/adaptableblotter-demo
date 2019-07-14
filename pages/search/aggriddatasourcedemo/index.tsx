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
            When a Data Source is selected, the SearchChanged event fires
            allowing you to perform serach on the server and return data to the
            Adaptable Blotter via the API.
          </p>
          <p>
            In this example we have created 4 Data Sources and we also listen to
            SearchChanged and fire details to the console. Note: a release in
            the near future will provide parameterised queries for Data Sources.
          </p>
          <p>
            <b>Adaptable Blotter Help Resources:</b>{' '}
            <a
              href="https://adaptabletools.zendesk.com/hc/en-us/articles/360005167971-Data-Source-Selector"
              target="_blank"
            >
              User Guide
            </a>{' '}
            -{' '}
            <a
              href="https://api.adaptableblotter.com/interfaces/_predefinedconfig_runtimestate_datasourcestate_.datasourcestate.html"
              target="_blank"
            >
              Predefined Config
            </a>{' '}
            -{' '}
            <a
              href="https://api.adaptableblotter.com/interfaces/_api_interface_idatasourceapi_.idatasourceapi.html"
              target="_blank"
            >
              Blotter API
            </a>{' '}
            -{' '}
            <a
              href="https://adaptabletools.zendesk.com/hc/en-us/articles/360029895991-Data-Source-Selector-FAQ"
              target="_blank"
            >
              FAQ
            </a>{' '}
            -{' '}
            <a href="" target="_blank">
              Videos
            </a>
            .
          </p>
        </div>
      }
    />
  );
};
