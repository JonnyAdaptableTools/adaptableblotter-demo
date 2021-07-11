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
            The Dashboard can be configured to display <b>Custom Toolbars</b>,
            where users can render their own bespoke content{' '}
          </p>
          <p>
            Custom Toolbars are provided through{' '}
            <a
              href="https://docs.adaptabletools.com/docs/adaptable-options/dashboard-options"
              target="_blank"
            >
              Dashboard Options
            </a>{' '}
            and AdapTable will manage toolbar visibility as part of User State.
          </p>
          <p>
            Each Custom Toolbar contains 2 'Divs', in order to cater for a
            different use case:
          </p>
          <ol>
            <li>
              Pre-populate the Toolbar with Adaptable Button definitions. Note
              that you can style the buttons individually (as we have done in
              all 3 custom toolbars), and you can add a custom icon.
            </li>
            <li>
              Render the Toolbar with any bespoke, custom, content that is
              required; simply listen to the{' '}
              <a
                href="https://docs.adaptabletools.com/docs/adaptable-events/dashboard-changed-event"
                target="_blank"
              >
                DashboardChanged
              </a>{' '}
              event and when the Toolbar becomes visible, render any content.
            </li>
          </ol>{' '}
          <p>Each Custom Toolbar has 3 optional display properties:</p>
          <ul>
            <li>
              <b>title</b>: if set, this will display at the bottom of the
              Toolbar
            </li>
            <li>
              <b>showConfigureButton</b>: if set to <i>true</i>, this will
              display a button with a 'wrench' icon' - when the button is
              clicked the{' '}
              <a
                href="https://docs.adaptabletools.com/docs/adaptable-events/custom-toolbar-configured-event"
                target="_blank"
              >
                CustomToolbarConfigured
              </a>{' '}
              event is fired.
            </li>
            <li>
              <b>showCloseButton</b>: if set to <i>true</i>, this will display a
              button that closes the Toolbar if clicked.
            </li>
          </ul>
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
