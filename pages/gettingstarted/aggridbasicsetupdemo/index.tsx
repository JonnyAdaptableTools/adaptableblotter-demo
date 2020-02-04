import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/gettingstarted/aggridbasicsetupdemo')}
      pageTitle={'Basic Set Up Demo'}
      description={
        <div>
          <p>
            This example shows how to create an instance of AdapTable using
            ag-Grid. All the code required is displayed under the Grid.{' '}
          </p>
          <p>
            This is a very basic implementation, e.g. we have not set up
            advanced features like Server Searching, Audit Log or Config Server.
            Nor have we provided Adaptable with Permissions.
          </p>
          <p>
            The main steps required to create an instance of AdapTable (using
            ag-Grid as the underlying grid) are:
            <ol>
              <li>
                Create an ag-Grid GridOptions object with a column schema, row
                data and any properties set.
              </li>
              <li>Create any Predefined Configuration that you want</li>
              <li>
                Create an AdaptableOptions object that will take the GridOptions
                and Predefined Config
              </li>
              <li>
                Instantiate AdapTable - passing in the AdaptableOptions object
                and retrieving an AdaptableApi object for run-time access to the
                tool.
              </li>
            </ol>
          </p>
          <p>
            Note: this example uses our core 'vanilla' JavaScript version; if
            you are using React or Angular then you might prefer to install
            AdapTable by using one of our Framework wrappers.
          </p>
        </div>
      }
      helpResources={
        <div>
          <a
            href="https://github.com/AdaptableTools/adaptable/blob/master/packages/adaptable/README.md"
            target="_blank"
          >
            ReadMe Guide
          </a>
          ,{' '}
          <a
            href="https://api.adaptabletools.com/interfaces/_predefinedconfig_predefinedconfig_.predefinedconfig.html"
            target="_blank"
          >
            Predefined Config
          </a>
          ,{' '}
          <a
            href="https://api.adaptabletools.com/interfaces/_api_adaptableapi_.adaptableapi"
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
