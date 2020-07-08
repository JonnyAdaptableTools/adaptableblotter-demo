import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/toolpanel/aggridtoolpaneldemo')}
      pageTitle={'Tool Panel Demo'}
      description={
        <div>
          <p>
            The AdapTable Tool Panel is designed for situations when screen
            estate is limited and the Dashboard is too 'bulky'.
          </p>
          <p>
            It is a standard{' '}
            <a
              href="https://www.ag-grid.com/javascript-grid-tool-panel-component/#example-custom-stats-tool-panel-component"
              target="_blank"
            >
              ag-Grid Custom Tool Panel Component
            </a>{' '}
            with one control to map to each Dashboard Toolbar.
          </p>{' '}
          <p>
            You can set with Tool Panel elememt are availalbe and which are
            visible through Tool Panel state (again similar to how the Dashboard
            works).
          </p>
          <p>
            In this example we have set the Dashboard to floating and set the
            Toolpanel to show on open. You can 'restore' the Dashboard by
            double-clicking the Name or by unchecking the 'Floating' option in
            the 'Dashboard' Toolbar control.
          </p>
        </div>
      }
      helpResources={
        <div>
          <a
            href="https://api.adaptabletools.com/interfaces/_src_predefinedconfig_toolpanelstate_.toolpanelstate.html"
            target="_blank"
          >
            Predefined Config
          </a>{' '}
          |{' '}
          <a
            href="https://api.adaptabletools.com/interfaces/_src_api_toolpanelapi_.toolpanelapi.html"
            target="_blank"
          >
            Adaptable API
          </a>
        </div>
      }
    />
  );
};
