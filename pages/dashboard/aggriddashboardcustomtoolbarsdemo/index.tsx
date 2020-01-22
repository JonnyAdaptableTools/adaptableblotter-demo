import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import(
        '../../../src/client/dashboard/aggriddashboardcustomtoolbarsdemo'
      )}
      pageTitle={'Custom Toolbars Demo'}
      description={
        <div>
          <h4>Custom Toolbars Demo</h4>
          <p>
            The Dashboard includes a Custom Toolbars collection to enable users
            to render their own content, and AdapTable will manage toolbar
            visibility as part of User State.
          </p>
          <p>
            Each Custom Toolbar contains 2 'Divs', each to cater for a different
            use case:
          </p>
          <p>
            (1) Pre-populate the Toolbar with Button definitions (as part of{' '}
            <a
              href="https://api.adaptabletools.com/interfaces/_predefinedconfig_dashboardstate_.dashboardstate.html"
              target="_blank"
            >
              Dashboard State
            </a>
            ); when a button is clicked the{' '}
            <a
              href="https://api.adaptabletools.com/interfaces/_api_eventapi_.eventapi.html"
              target="_blank"
            >
              ToolbarButtonClicked
            </a>{' '}
            event is fired. Note that we have also styled the buttons
            individually.
          </p>
          <p>
            (2) Render the Toolbar with any content that is required; listen to
            the{' '}
            <a
              href="https://api.adaptabletools.com/interfaces/_api_eventapi_.eventapi.html#on"
              target="_blank"
            >
              ToolbarVisibilityChanged
            </a>{' '}
            event and if the Toolbar has become visible, then render the
            content.
          </p>
          <p>
            <b>AdapTable Help Resources:</b>{' '}
            <a
              href="https://api.adaptabletools.com/interfaces/_predefinedconfig_dashboardstate_.dashboardstate.html"
              target="_blank"
            >
              Predefined Config
            </a>
            ,{' '}
            <a
              href="https://api.adaptabletools.com/interfaces/_api_dashboardapi_.dashboardapi.html"
              target="_blank"
            >
              Adaptable API
            </a>
            ,{' '}
            <a
              href="https://adaptabletools.zendesk.com/hc/en-us/articles/360008819192-Adaptable-Blotter-State-FAQ"
              target="_blank"
            >
              FAQ
            </a>
            .
          </p>
        </div>
      }
    />
  );
};