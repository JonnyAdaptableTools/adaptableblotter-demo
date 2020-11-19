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
              href="https://docs.adaptabletools.com/docs/adaptable-events/search-changed-event"
              target="_blank"
            >
              Search Changed Event
            </a>{' '}
            fires - stating what triggered the event and providing the search
            and filter sections of the State (including the selected
            DataSource).
          </p>
          <p>
            This allows you to perform the necessary actions on the server and
            return data to AdapTable via the{' '}
            <a
              href="https://docs.adaptabletools.com/docs/adaptable-api/grid-api"
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
            href="https://docs.adaptabletools.com/docs/adaptable-functions/data-source-function"
            target="_blank"
          >
            Data Source Function
          </a>{' '}
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/predefined-config/data-source-config"
            target="_blank"
          >
            Data Source Predefined Config
          </a>{' '}
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/adaptable-api/data-source-api"
            target="_blank"
          >
            Data Source Api
          </a>{' '}
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/adaptable-options/search-options#serversearchoption"
            target="_blank"
          >
            Server Searching
          </a>
        </div>
      }
    />
  );
};
