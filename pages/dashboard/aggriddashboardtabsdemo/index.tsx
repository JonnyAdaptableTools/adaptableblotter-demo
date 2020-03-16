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
            called 'Toolbars' which will contain either the collection of
            VisibleToolbars previously set, or - failing that - the default
            list.
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
            href="https://github.com/AdaptableTools/adaptable/blob/master/packages/adaptable/readme/Functions/dashboard_function.md"
            target="_blank"
          >
            Read Me
          </a>{' '}
          |{' '}
          <a
            href="https://api.adaptabletools.com/interfaces/_src_predefinedconfig_dashboardstate_.dashboardstate.html"
            target="_blank"
          >
            Predefined Config
          </a>{' '}
          |{' '}
          <a
            href="https://api.adaptabletools.com/interfaces/_src_api_dashboardapi_.dashboardapi.html"
            target="_blank"
          >
            Adaptable API
          </a>
        </div>
      }
    />
  );
};
