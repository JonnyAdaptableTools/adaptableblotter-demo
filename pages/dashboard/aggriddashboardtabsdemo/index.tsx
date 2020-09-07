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
            Note: if there are no Tabs, AdapTable will create a default one
            called 'Toolbars' which will contain the default list of toolbars.
          </p>
          <p>
            In this example we created 3 Tabs: 'Grid', 'Edit' and 'Search', each
            with a selection of Toolbars. (Note: Grid includes the 'Chart'
            toolbar for which we needed to install the{' '}
            <a
              href="https://api.adaptabletools.com/interfaces/_src_adaptableoptions_adaptableoptions_.adaptableoptions.html#plugins"
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
