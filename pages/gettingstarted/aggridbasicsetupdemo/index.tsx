import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      agGridTheme="ag-theme-alpine"
      demo={import('../../../src/client/gettingstarted/aggridbasicsetupdemo')}
      pageTitle={'Basic Set Up Demo'}
      description={
        <div>
          <p>
            This example shows how to create an instance of AdapTable using
            ag-Grid. All the code used to build the demo is displayed under the
            Grid.{' '}
          </p>
          <p>
            This is, of course, a very basic implementation, e.g. we have not
            set up advanced features like{' '}
            <a
              href="https://docs.adaptabletools.com/docs/adaptable-options/search-options#serversearchoption"
              target="_blank"
            >
              Server Searching
            </a>
            ,{' '}
            <a href="../auditlog" target="_blank">
              Audit Log
            </a>
            , or{' '}
            <a
              href="https://docs.adaptabletools.com/docs/adaptable-options/state-options"
              target="_blank"
            >
              State Options
            </a>
            ; nor have we provided Adaptable with{' '}
            <a href="../entitlements" target="_blank">
              Permissions
            </a>
            .
          </p>
          <p>
            Everything is fully annotated below, but the main steps required to
            create an instance of AdapTable (using ag-Grid as the underlying
            grid) are:
            <ol>
              <li>
                Create an{' '}
                <b>
                  <a
                    href="https://www.ag-grid.com/javascript-grid-properties/"
                    target="_blank"
                  >
                    ag-Grid GridOptions
                  </a>
                </b>{' '}
                object with a column schema, row data and any properties set.
              </li>
              <li>
                Write any{' '}
                <b>
                  <a
                    href="https://docs.adaptabletools.com/docs/predefined-config/predefined-config-overview"
                    target="_blank"
                  >
                    Predefined Config
                  </a>
                </b>{' '}
                that you want
              </li>
              <li>
                Create an{' '}
                <b>
                  <a
                    href="https://docs.adaptabletools.com/docs/adaptable-options/adaptable-options-overview"
                    target="_blank"
                  >
                    AdaptableOptions
                  </a>
                </b>{' '}
                object that will take the GridOptions and Predefined Config.
              </li>
              <li>
                Instantiate AdapTable - passing in the AdaptableOptions object
                and retrieving an{' '}
                <b>
                  <a
                    href="https://docs.adaptabletools.com/docs/adaptable-api/adaptable-api-overviewi"
                    target="_blank"
                  >
                    AdaptableApi
                  </a>
                </b>{' '}
                object for run-time access to the tool.
              </li>
            </ol>
          </p>
          <p>
            Note: this example uses our core 'vanilla' JavaScript version; we
            also provide{' '}
            <a
              href="https://docs.adaptabletools.com/docs/react-wrapper/react-wrapper-overview"
              target="_blank"
            >
              React
            </a>{' '}
            and{' '}
            <a
              href="https://docs.adaptabletools.com/docs/angular-wrapper/angular-wrapper-overview"
              target="_blank"
            >
              Angular
            </a>{' '}
            wrappers if you want to use AdapTable in a framework-friendly
            manner.
          </p>
        </div>
      }
      helpResources={
        <div>
          <a href="https://docs.adaptabletools.com/docs/" target="_blank">
            Getting Started
          </a>{' '}
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/predefined-config/predefined-config-overview"
            target="_blank"
          >
            Predefined Config
          </a>{' '}
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/adaptable-api/adaptable-api-overviewi"
            target="_blank"
          >
            Adaptable API
          </a>
          .
        </div>
      }
    />
  );
};
