import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/alerts/aggridflashingalertsdemo')}
      pageTitle={'Flashing Alerts Demo'}
      description={
        <div>
          <p>
            <a
              href="https://docs.adaptabletools.com/docs/adaptable-modules/alert-module#flashing-alerts"
              target="_blank"
            >
              Flashing Alerts
            </a>{' '}
            enable cells to change their style briefly appear as the value
            changes. (AdapTable also offer flashing rows - see{' '}
            <a href="./aggridflashingrowsdemo">this demo</a>.)
          </p>
          <p>
            The style and duration of the flash can be set for each Column or
            group of columns - through{' '}
            <a
              href="https://docs.adaptabletools.com/docs/predefined-config/alert-config"
              target="_blank"
            >
              Alert Predefined Config
            </a>{' '}
            or via the UI.
          </p>
          <p>
            Alternatively you can provide default flashing styles in{' '}
            <a
              href="https://docs.adaptabletools.com/docs/adaptable-options/alert-options"
              target="_blank"
            >
              Alert Options
            </a>{' '}
            which will be used unless they are expressly overriden.
          </p>
          <p>
            If nothing is provided, the defaults for Flashing Alerts are: half a
            second, with a green flash for a positive change and a red flash for
            a negative change.
          </p>
          <p>
            This (very contrived!) example has 4 Columns with Flashing Alerts
            set:
            <ul>
              <li>
                The 'Item Cost', 'Order Cost', 'Change Last Order' columns use
                the default flashing values
              </li>
              <li>
                The 'Invoiced' column (for no particularly good reason) has
                custom colours and a longer duration.
              </li>
            </ul>
          </p>
          <p>
            The Dashboard in this demo has been put into floating mode - useful
            for when screen estate is at a premium.
          </p>
        </div>
      }
      helpResources={
        <div>
          {' '}
          <a
            href="https://docs.adaptabletools.com/docs/adaptable-modules/alert-module"
            target="_blank"
          >
            Alert Module
          </a>{' '}
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/predefined-config/alert-config"
            target="_blank"
          >
            Alert Config
          </a>{' '}
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/adaptable-options/alert-options"
            target="_blank"
          >
            Alert Options
          </a>{' '}
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/adaptable-api/alert-api"
            target="_blank"
          >
            Alert Api
          </a>{' '}
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/adaptable-events/alert-fired-event"
            target="_blank"
          >
            AlertFired Event
          </a>
        </div>
      }
    />
  );
};
