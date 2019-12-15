import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import(
        '../../../src/client/dashboard/aggriddashboardapplicationtoolbardemo'
      )}
      pageTitle={'Application Toolbar Demo'}
      description={
        <div>
          <h4>Application Toolbar Demo</h4>
          <p>
            The Application Toolbar is an empty toolbar provided by the
            Adaptable Blotter, with the intention that users will render their
            own content, and the Adaptable Blotter will manage toolbar
            visibility as part of User State.
          </p>
          <p>
            The Application Toolbar contains 2 'Divs', each to cater for a
            different use case:
          </p>
          <p>
            (1) Pre-populate the Toolbar with Button definitions (as part of{' '}
            <a
              href="https://api.adaptableblotter.com/interfaces/_predefinedconfig_applicationstate_.applicationstate.html"
              target="_blank"
            >
              Application State
            </a>
            ); when a button is clicked the{' '}
            <a
              href="https://api.adaptableblotter.com/interfaces/_api_eventapi_.eventapi.html"
              target="_blank"
            >
              ApplicationToolbarButtonClicked
            </a>{' '}
            event is fired. Note that we have also styled the buttons
            individually.
          </p>
          <p>
            (2) Render the Toolbar with any content that is required; listen to
            the{' '}
            <a
              href="https://api.adaptableblotter.com/interfaces/_api_eventapi_.eventapi.html#on"
              target="_blank"
            >
              ToolbarVisibilityChanged
            </a>{' '}
            event and if the Application Toolbar has become visible, then render
            the content.
          </p>
          <p>
            <b>Adaptable Blotter Help Resources:</b>{' '}
            <a
              href="https://api.adaptableblotter.com/interfaces/_predefinedconfig_applicationstate_.applicationstate.html"
              target="_blank"
            >
              Predefined Config
            </a>
            ,{' '}
            <a
              href="https://api.adaptableblotter.com/interfaces/_api_applicationapi_.applicationapi.html"
              target="_blank"
            >
              Blotter API
            </a>
            ,{' '}
            <a
              href="https://adaptabletools.zendesk.com/hc/en-us/articles/360029743092-Dashboard-FAQ"
              target="_blank"
            >
              FAQ
            </a>
            ,{' '}
            <a
              href="https://adaptabletools.zendesk.com/hc/en-us/articles/360002755177-Styling-Functions"
              target="_blank"
            >
              User Guide
            </a>
            .
          </p>
        </div>
      }
    />
  );
};
