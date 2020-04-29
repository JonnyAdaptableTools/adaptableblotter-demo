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
            ag-Grid. All the code used to build the demo is displayed under the
            Grid.{' '}
          </p>
          <p>
            This is, of course, a very basic implementation, e.g. we have not
            set up advanced features like{' '}
            <a
              href="https://api.adaptabletools.com/interfaces/_src_adaptableoptions_searchoptions_.searchoptions.html#serversearchoption"
              target="_blank"
            >
              Server Searching
            </a>
            ,{' '}
            <a href="../auditlog/aggridauditdemo" target="_blank">
              Audit Log
            </a>
            , or{' '}
            <a
              href="https://api.adaptabletools.com/modules/_src_adaptableoptions_stateoptions_.html"
              target="_blank"
            >
              State Options
            </a>
            ; nor have we provided Adaptable with{' '}
            <a href="../admin/aggridentitlementsdemo" target="_blank">
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
                    href="https://api.adaptabletools.com/interfaces/_src_predefinedconfig_predefinedconfig_.predefinedconfig.html"
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
                    href="https://api.adaptabletools.com/interfaces/_src_adaptableoptions_adaptableoptions_.adaptableoptions"
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
                    href="https://api.adaptabletools.com/interfaces/_src_api_adaptableapi_.adaptableapi"
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
              href="https://github.com/AdaptableTools/adaptable/blob/master/packages/adaptable-react-aggrid/README.md"
              target="_blank"
            >
              React
            </a>{' '}
            and{' '}
            <a
              href="https://github.com/AdaptableTools/adaptable/blob/master/packages/adaptable-ng-aggrid/README.md"
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
          <a
            href="https://github.com/AdaptableTools/adaptable/blob/master/packages/adaptable/README.md"
            target="_blank"
          >
            ReadMe Guide
          </a>
          ,{' '}
          <a
            href="https://api.adaptabletools.com/interfaces/_src_predefinedconfig_predefinedconfig_.predefinedconfig.html"
            target="_blank"
          >
            Predefined Config
          </a>
          ,{' '}
          <a
            href="https://api.adaptabletools.com/interfaces/_src_api_adaptableapi_.adaptableapi"
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
