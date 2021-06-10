import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/alerts/aggridflashingrowsdemo')}
      pageTitle={'Flashing Row Alerts Demo'}
      description={
        <div>
          <p>
            Flashing Alerts can target either cells (see{' '}
            <a href="./aggridflashingalertsdemo">this demo</a>) or rows
          </p>
          <p>
            Typically users choose to flash rows when data ticks rarely and for
            longer (in some case infinite) durations.
          </p>
          <p>
            Flashing Alert Rows can also be styled (similar to Flashing Alert
            Cells), with default values set in{' '}
            <a
              href="https://docs.adaptabletools.com/docs/adaptable-options/alert-options"
              target="_blank"
            >
              Alert Options
            </a>{' '}
            and overriden for a particular instance in{' '}
            <a
              href="https://docs.adaptabletools.com/docs/predefined-config/alert-config"
              target="_blank"
            >
              Alert Predefined Config
            </a>{' '}
          </p>
          <p>
            In this demo we have set a Flashing Alert Row to highlight a row
            every 3 seconds, with a duration of 'always' (meaning the row will
            stay highlighted after it changes indefinitely).
          </p>
          <p>
            Note: you can clear a single Flashing Alert Row through the "Clear
            Flashing Alert for Row" Context Menu Item.
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
            Alert API
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
