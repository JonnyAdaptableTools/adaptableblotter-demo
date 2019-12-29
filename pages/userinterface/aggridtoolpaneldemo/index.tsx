import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/userinterface/aggridtoolpaneldemo')}
      pageTitle={'Tool Panel Demo'}
      description={
        <div>
          <h4>Tool Panel Demo</h4>
          <p>
            <b>
              This is work in progress and will be formally released in January
              2020.
            </b>
          </p>
          <p>
            The Adaptable Blotter Tool Panel is designed for situations when
            screen estate is limited and the Dashboard is too 'bulky'.
          </p>
          <p>
            It is a standard{' '}
            <a
              href="https://www.ag-grid.com/javascript-grid-tool-panel-component/#example-custom-stats-tool-panel-component"
              target="_blank"
            >
              ag-Grid Custom Tool Panel Component
            </a>{' '}
            with one control to map each Dashboard Toolbar.
          </p>{' '}
          <p>
            You can set with Tool Panel elememt are availalbe and which are
            visible through Tool Panel state (again similar to how the Dashboard
            works).
          </p>
          <p>
            In this example we have set the Dashboard to hidden and set the
            Toolpanel to show on open. You can 'restore' the Dashboard via the
            dropdown in the 'Dashboard' Toolbar control.
          </p>
        </div>
      }
    />
  );
};
