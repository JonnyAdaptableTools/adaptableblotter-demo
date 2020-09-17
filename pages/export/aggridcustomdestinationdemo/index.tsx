import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/export/aggridcustomdestinationdemo')}
      pageTitle={'Custom Destination Demo'}
      description={
        <div>
          <p>AdapTable lets users send reports to these destinations:</p>
          <ul>
            <li>Excel (if the right vendor grid modules have been loaded)</li>
            <li>CSV</li>
            <li>JSON</li>
            <li>Clipboard</li>
          </ul>
          <p>
            However sometimes developers might want to add additional
            destinations such as particular REST endpoints, or by email. This
            can be done as follows:
          </p>
          <ol>
            <li>
              Add the destination to the <b>CustomDestinations</b> section of
              Export State
            </li>
            <li>
              Provide an implementation of the{' '}
              <b>CustomExportDestinationFunction</b> function to be called
              whenever that destination has been specified
            </li>
            <li>
              In that function to provide whatever custom code is required to
              send the report - the function receives the Report and the Report
              Data
            </li>
          </ol>
          <p>
            In this example we have created a Custom Destination called 'Email'
            and in our dummy function implemenation we simply output the report
            data to the console.
          </p>
        </div>
      }
      helpResources={
        <div>
          <a
            href="https://api.adaptabletools.com/interfaces/_src_predefinedconfig_exportstate_.exportstate.html"
            target="_blank"
          >
            Export Config
          </a>{' '}
          |{' '}
          <a
            href="https://api.adaptabletools.com/interfaces/_src_api_exportapi_.exportapi.html"
            target="_blank"
          >
            Export Api
          </a>
          |{' '}
          <a
            href="https://github.com/AdaptableTools/adaptable/blob/master/packages/adaptable/readme/functions/export-function.md"
            target="_blank"
          >
            Export Read Me
          </a>
          |{' '}
          <a
            href="https://api.adaptabletools.com/interfaces/_src_adaptableoptions_exportoptions_.exportoptions.html"
            target="_blank"
          >
            Export Options
          </a>{' '}
          |{' '}
          <a
            href="https://api.adaptabletools.com/modules/_src_adaptableoptions_userfunctions_.html"
            target="_blank"
          >
            UserFunctions
          </a>{' '}
        </div>
      }
    />
  );
};
