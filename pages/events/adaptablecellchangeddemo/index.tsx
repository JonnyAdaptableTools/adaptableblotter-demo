import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/events/adaptablecellchangeddemo')}
      pageTitle={'Adaptable Cells Changed'}
      description={
        <div>
          <p>
            Adaptable fires the{' '}
            <a
              href="https://docs.adaptabletools.com/docs/adaptable-events/cell-changed-event"
              target="_blank"
            >
              Cell Changed Event
            </a>{' '}
            whenever any data changes in the Grid
          </p>
          <p>
            The event is fired both for changes caused by a direct cell edit and
            if there is 'ticking' data.
          </p>
          <p>
            The event gives full details of the data change, who caused it, when
            and how.
          </p>
          <p>
            In this example we are mimicking ticking data by updating the 'Item
            Count' column every 4 seconds.
          </p>
          <p>
            Open the console in Dev Tools to see the full event info - but we
            have printed out the main elements below. Try it by making some
            edits of your own...
          </p>{' '}
          <div id="outputDiv" />{' '}
        </div>
      }
      helpResources={
        <div>
          <a
            href="https://docs.adaptabletools.com/docs/adaptable-events/cell-changed-event"
            target="_blank"
          >
            Cell Changed Event
          </a>
        </div>
      }
    />
  );
};
