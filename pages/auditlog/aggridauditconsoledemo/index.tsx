import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/auditlog/aggridauditconsoledemo')}
      pageTitle={'Audit Log Demo - Sending to the Console'}
      description={
        <div>
          <p>
            Every grid event, mouse click, user action, cell edit etc. is
            auditable by AdapTable and available for you to listen to and review
            - perfect for Support Teams or for data playback.
          </p>
          <p>
            You can choose to send any (or all) of <b>Cell Edit</b>,{' '}
            <b>Ticking Data</b>, <b>User State</b>, <b>Function Applied</b> and{' '}
            <b>Internal State</b> changes to the Audit Log.{' '}
          </p>
          <p>
            The Audit Log will send a message to up to 4 destinations: published
            to an <b>Http Channel</b>, displayed as an <b>Alert</b>, logged to
            the <b>Console</b> or fired as an <b>Event</b>.
          </p>
          <p>
            This example sends Audit Log Messages for Ticking Data, Internal
            State and User State changes - to the Console.
          </p>
          <p>
            Open the console in Dev Tools to see the messages as they come
            through - note that we have mimiced ticking data.
          </p>
        </div>
      }
      helpResources={
        <div>
          <a
            href="https://api.adaptabletools.com/interfaces/_src_adaptableoptions_auditoptions_.auditoptions.html"
            target="_blank"
          >
            Audit Options
          </a>
        </div>
      }
    />
  );
};
