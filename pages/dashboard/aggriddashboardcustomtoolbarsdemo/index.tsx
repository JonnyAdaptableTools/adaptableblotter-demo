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
          <p>
            The Dashboard includes a Custom Toolbars collection to enable users
            to render their own content, and AdapTable will manage toolbar
            visibility as part of User State.
          </p>
          <p>
            Each Custom Toolbar contains 2 'Divs', in order to cater for a
            different use case:
          </p>
          <ol>
            <li>
              Pre-populate the Toolbar with Button definitions (as part of{' '}
              <a
                href="https://api.adaptabletools.com/interfaces/_src_predefinedconfig_dashboardstate_.dashboardstate.html"
                target="_blank"
              >
                Dashboard State
              </a>
              ); when a button is clicked the{' '}
              <a
                href="https://api.adaptabletools.com/interfaces/_src_api_eventapi_.eventapi.html"
                target="_blank"
              >
                ToolbarButtonClicked
              </a>{' '}
              event is fired.
              <br />
              Note that you can styled the buttons individually (as we have done
              in all 3 custom toolbars), and you can add a custom icon.
            </li>
            <li>
              Render the Toolbar with any bespoke, custom, content that is
              required; simply listen to the{' '}
              <a
                href="https://api.adaptabletools.com/interfaces/_src_api_eventapi_.eventapi.html#on"
                target="_blank"
              >
                ToolbarVisibilityChanged
              </a>{' '}
              event and when the Toolbar becomes visible, render any content.
            </li>
          </ol>{' '}
          <p>Each Custom Toolbar has 2 optional display properties:</p>
          <ul>
            <li>
              <b>Title</b>: if set, this will display at the bottom of the
              Toolbar
            </li>
            <li>
              <b>ShowConfigureButton</b>: if set to <i>true</i>, this will
              display a button with a 'wrench' icon' - when the button is
              clicked the{' '}
              <a
                href="https://api.adaptabletools.com/interfaces/_src_api_eventapi_.eventapi.html#on"
                target="_blank"
              >
                CustomToolbarConfigured
              </a>{' '}
              event is fired.
            </li>
          </ul>
        </div>
      }
      helpResources={
        <div>
          <a
            href="https://github.com/AdaptableTools/adaptable/blob/master/packages/adaptable/readme/functions/dashboard-function.md"
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
