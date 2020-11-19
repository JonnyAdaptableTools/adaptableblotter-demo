import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/dashboard/aggriddashboardtabsdemo')}
      pageTitle={'Dashboard Tabs Demo'}
      description={
        <div>
          <p>
            The Dashboard ships with a large number of <b>Toolbars</b>. They
            each provide quick access to a given Function together with
            dropdowns and buttons as required.
          </p>
          <p>
            Plus each toolbar contains a 'configure' button to open the
            associated popup window for that Function.
          </p>
          <p>
            You can create <b>Tabs</b> in Dashboard Predefined Config - tabs are
            named groups of associated Toolbars.
          </p>
          <p>
            Note: if there are no Tabs in the Config, AdapTable will create a
            Tab called 'Toolbars' which will contain the default list of
            'Query', 'Layout', 'Export', 'Filter'.
          </p>
          <p>
            In this example we created 3 Tabs: 'Grid', 'Edit' and 'Search', each
            with a selection of Toolbars. (Note: Grid includes the 'Chart'
            toolbar for which we needed to install the{' '}
            <a
              href="https://docs.adaptabletools.com/docs/plugins/chart/chart-plugin"
              target="_blank"
            >
              Charts plugin
            </a>
            ).
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
