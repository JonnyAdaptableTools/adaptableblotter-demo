import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/export/aggridcustomdestinationdemo')}
      pageTitle={'Custom Destination Demo'}
      description={
        <div>
          <p>
            AdapTable lets users send reports to these destinations: Excel, CSV,
            JSON and Clipboard.
          </p>
          <p>
            However sometimes developers might want to add additional
            destinations such as particular REST endpoints, or by email. This
            can be done as follows:
          </p>
          <ol>
            <li>
              Add the destination to the <b>CustomDestinations</b> section of{' '}
              <a
                href="https://docs.adaptabletools.com/docs/predefined-config/export-config#customdestinations"
                target="_blank"
              >
                Export State
              </a>
            </li>
            <li>
              Provide an implementation of the{' '}
              <b>CustomExportDestinationFunction</b> function in{' '}
              <a
                href="https://docs.adaptabletools.com/docs/adaptable-options/user-functions"
                target="_blank"
              >
                User Functions
              </a>{' '}
              to be called whenever that destination has been specified
            </li>
            <li>
              In that function to provide whatever custom code is required to
              send the report - the function receives the Report and the Report
              Data
            </li>
          </ol>
          <p>
            If other information is needed you can provide{' '}
            <b>custom field definitions</b> and AdapTable will dynamically
            display a form accordingly and send the results in the
            <i>CustomExportDestinationFunction</i>.
          </p>
          <p>
            In this example we have created 2 Custom Destinations - for both we
            simply output the report data to the console in the{' '}
            <i>CustomExportDestinationFunction</i> handler:{' '}
          </p>
          <ul>
            <li>
              <i>Email</i> - which also contains Form Data and default form
              values
            </li>
            <li>
              <i>REST Endpoint</i> - which has no form data
            </li>
          </ul>
        </div>
      }
      helpResources={
        <div>
          <a
            href="https://docs.adaptabletools.com/docs/adaptable-functions/export-function"
            target="_blank"
          >
            Export Function
          </a>
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/predefined-config/export-config"
            target="_blank"
          >
            Export Config
          </a>{' '}
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/adaptable-api/export-api"
            target="_blank"
          >
            Export Api
          </a>
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/adaptable-options/export-options"
            target="_blank"
          >
            Export Options
          </a>{' '}
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/adaptable-options/user-functions"
            target="_blank"
          >
            UserFunctions
          </a>{' '}
        </div>
      }
    />
  );
};
