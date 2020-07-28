import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/export/aggridcustomreportsdemo')}
      pageTitle={'Custom Reports Demo'}
      description={
        <div>
          <p>
            Unlike{' '}
            <a href="./aggridsystemreportsdemo" target="_self">
              System Reports
            </a>{' '}
            and{' '}
            <a href="./aggriduserreportsdemo" target="_self">
              User Reports
            </a>{' '}
            , <b>Custom Reports</b> - also offered by AdapTable - do not need to
            include data (or columns) present in the grid in the exported data
            set.
          </p>
          <p>
            Instead the data in the export is fetched each time the report is
            run via a function provided in{' '}
            <a
              href="https://api.adaptabletools.com/modules/_src_adaptableoptions_userfunctions_.html"
              target="_blank"
            >
              UserFunctions
            </a>{' '}
            (and referenced in{' '}
            <a
              href="https://api.adaptabletools.com/interfaces/_src_predefinedconfig_exportstate_.exportstate.html"
              target="_blank"
            >
              Export Predefined Config
            </a>
            ) .
          </p>
          <p>
            This allows developers to provide their own reports but leverage
            AdapTable state, scheduling and report destinations.
          </p>
          <p>
            This example includes a Custom Report entitled <i>People Report</i>{' '}
            with 3 columns and 4 rows of data - none of which are contained in
            the current grid.
          </p>
          <p>
            Note that not every cell needs to have data, but it needs to be
            present in the data (which is an array or arrays) so that all the
            rows match the provided columns.
          </p>
          <p>
            Additionally, this report is scheduled to run (exporting to CSV)
            every day at 17:30
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
