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
            However sometimes developers might want to add{' '}
            <a
              href="https://docs.adaptabletools.com/docs/adaptable-modules/export-module#custom-destinations"
              target="_blank"
            >
              additional destinations
            </a>{' '}
            such as particular REST endpoints, or by email.{' '}
          </p>
          <p>
            This can be done through the <i>customDestinations</i> property in{' '}
            <a
              href="https://docs.adaptabletools.com/docs/adaptable-options/export-options"
              target="_blank"
            >
              Export Options
            </a>
          </p>
          <p>
            If additional information is required from the user prior to export,
            you can provide a <b>custom form definition</b>, which AdapTable
            will automatically display.
          </p>
          <p>In this example we have created 2 Custom Destinations:</p>
          <ul>
            <li>
              <b>Email</b> - which also contains a Form with 3 controls, default
              value and validation
            </li>
            <li>
              <b>REST Endpoint</b> - which has no form data
            </li>
          </ul>{' '}
          <div id="outputDiv" />{' '}
        </div>
      }
      helpResources={
        <div>
          <a
            href="https://docs.adaptabletools.com/docs/adaptable-modules/export-module"
            target="_blank"
          >
            Export Module
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
          </a>{' '}
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/adaptable-options/export-options"
            target="_blank"
          >
            Export Options
          </a>
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/user-interface/adaptable-form"
            target="_blank"
          >
            Adaptable Form
          </a>{' '}
        </div>
      }
    />
  );
};
