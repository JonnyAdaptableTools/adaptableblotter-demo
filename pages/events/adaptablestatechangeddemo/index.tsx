import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/events/adaptablestatechangeddemo')}
      pageTitle={'Adaptable State Changed'}
      description={
        <div>
          <p>
            Adaptable fires an event whenever ANY state changes - both internal
            or user.
          </p>
          <p>
            This means that every grid event, mouse click, user action, cell
            edit etc. is auditable by AdapTable and available for you to listen
            to and review - perfect for Support Teams or for data playback.
          </p>
          <p>
            Open the console in Dev Tools to see all the messages as they come
            through - and we have printed the name of the Action below
          </p>{' '}
          <div id="outputDiv" />{' '}
        </div>
      }
      helpResources={
        <div>
          <a
            href="https://docs.adaptabletools.com/docs/adaptable-events/adaptable-state-changed-event"
            target="_blank"
          >
            Adaptable State Changed Event
          </a>
        </div>
      }
    />
  );
};
