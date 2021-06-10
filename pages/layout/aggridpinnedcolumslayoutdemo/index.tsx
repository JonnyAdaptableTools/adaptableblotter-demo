import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/layout/aggridpinnedcolumslayoutdemo')}
      pageTitle={'Pinned Columns Layout Demo'}
      description={
        <div>
          <p>
            AdapTable Layouts provide support for Pinning in both the
            design-time Layout definition, and in run-time persistence.
          </p>
          <p>
            This is provided through the <b>PinnedColumnsMap</b> property which
            takes a simple map of Column Name and Direction (either 'right' or
            'left').
          </p>
          <p>
            In this example we have set Pinning for the <i>OrderId</i> column
            (to the 'left') and the <i>ContactName</i> column (to the 'right').
          </p>
        </div>
      }
      helpResources={
        <div>
          <a
            href="https://docs.adaptabletools.com/docs/adaptable-modules/layout-module"
            target="_blank"
          >
            Layout Module
          </a>{' '}
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/predefined-config/layout-config"
            target="_blank"
          >
            Layout Config
          </a>{' '}
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/adaptable-options/layout-options"
            target="_blank"
          >
            Layout Options
          </a>{' '}
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/adaptable-api/layout-api"
            target="_blank"
          >
            Layout Api
          </a>{' '}
        </div>
      }
    />
  );
};
