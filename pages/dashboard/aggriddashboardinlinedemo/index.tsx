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
              href="https://docs.adaptabletools.com/docs/predefined-config/dashboard-config#isinline"
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
            href="https://docs.adaptabletools.com/docs/user-interface/dashboard"
            target="_blank"
          >
            Dashboard Read Me
          </a>{' '}
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/predefined-config/dashboard-config"
            target="_blank"
          >
            Dashboard Config
          </a>{' '}
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/adaptable-options/dashboard-options"
            target="_blank"
          >
            Dashboard Options
          </a>{' '}
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/adaptable-api/dashboard-api"
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
