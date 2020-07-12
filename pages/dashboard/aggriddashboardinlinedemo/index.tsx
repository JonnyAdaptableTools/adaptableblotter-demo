import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/dashboard/aggriddashboardinlinedemo')}
      pageTitle={'Dashboard Inline Demo'}
      description={
        <div>
          <p>
            By default, AdapTable will show the Dashboard Header when the
            Dasbhoard is expanded.
          </p>
          <p>
            However you can change this via the <i>IsInline</i> property in{' '}
            <a
              href="https://api.adaptabletools.com/interfaces/_src_predefinedconfig_dashboardstate_.dashboardstate.html#isinline"
              target="_blank"
            >
              Dashboard Predefined Config
            </a>{' '}
          </p>
          <p>
            This is what we have done in this example and you can now see that
            the Dashboard shows the Header Information in the first toolbar
            instead.
          </p>
        </div>
      }
      helpResources={
        <div>
          <a
            href="https://github.com/AdaptableTools/adaptable/blob/master/packages/adaptable/readme/functions/dashboard-function.md"
            target="_blank"
          >
            Dashboard Read Me
          </a>{' '}
          |{' '}
          <a
            href="https://api.adaptabletools.com/interfaces/_src_predefinedconfig_dashboardstate_.dashboardstate.html"
            target="_blank"
          >
            Dashboard Config
          </a>{' '}
          |{' '}
          <a
            href="https://api.adaptabletools.com/interfaces/_src_api_dashboardapi_.dashboardapi.html"
            target="_blank"
          >
            Dashboard Api
          </a>{' '}
          |{' '}
          <a href="https://youtu.be/KrahnLFYHjs" target="_blank">
            Dashboard Video
          </a>
        </div>
      }
    />
  );
};
