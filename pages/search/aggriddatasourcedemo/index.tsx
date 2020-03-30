import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/search/aggriddatasourcedemo')}
      pageTitle={'Data Source Selector Demo'}
      description={
        <div>
          <p>
            Data Sources are lists of 'hard coded' names provided by you in
            Predefined Config to enable you to <b>run searches on the Server</b>
            .
          </p>
          <p>
            They are particularly useful if you have a list of Stored Procedures
            you want to to run, or a hardcoded list of named entities like Books
            or Entitlements.
          </p>
          <p>
            When a Data Source is selected, the{' '}
            <a
              href="https://api.adaptabletools.com/interfaces/_src_api_eventapi_.eventapi.html"
              target="_blank"
            >
              on('SearchChanged') event
            </a>{' '}
            fires - stating what triggered the event and providing the search
            and filter sections of the State (including the selected
            DataSource).
          </p>
          <p>
            This allows you to perform the necessary actions on the server and
            return data to AdapTable via the{' '}
            <a
              href="https://api.adaptabletools.com/interfaces/_src_api_gridapi_.gridapi.html"
              target="_blank"
            >
              Grid APi
            </a>{' '}
            <i>setGridData</i> method.{' '}
          </p>
          <p>
            Note: A forthcoming release will provide parameterised queries
            functionality so you can more easily control what is searched for on
            the server.
          </p>
          <p>
            In this example we created 4 Data Sources. We subscribe to
            SearchChanged event, fetch the relevant data and send to AdapTable
            via the API. We also ouput the event info to the console for your
            convenience.
          </p>
        </div>
      }
      helpResources={
        <div>
          <a
            href="https://api.adaptabletools.com/interfaces/_src_predefinedconfig_datasourcestate_.datasourcestate.html"
            target="_blank"
          >
            Predefined Config
          </a>
          ,{' '}
          <a
            href="https://api.adaptabletools.com/interfaces/_src_api_datasourceapi_.datasourceapi.html"
            target="_blank"
          >
            Adaptable API
          </a>
          ,{' '}
          <a
            href="https://api.adaptabletools.com/interfaces/_src_adaptableoptions_searchoptions_.searchoptions.html#serversearchoption"
            target="_blank"
          >
            Server Searching
          </a>
        </div>
      }
    />
  );
};
