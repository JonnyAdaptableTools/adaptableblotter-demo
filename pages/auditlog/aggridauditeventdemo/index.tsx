import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/auditlog/aggridauditeventdemo')}
      pageTitle={'Audit Log Demo - Firing an Event'}
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
            This example fires an event when a 'Cell Edit' Audit Log message is
            triggered; we handle the event and send the output to the console
            for display purposes.{' '}
          </p>
          <p>
            Open up the Console and edit a cell in the Grid and see that the
            event is captured and the payload sent to the console.
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
          ,{' '}
          <a
            href="https://adaptabletools.zendesk.com/hc/en-us/articles/360008819232-Audit-Log-FAQ"
            target="_blank"
          >
            FAQ
          </a>
          ,{' '}
          <a
            href="https://adaptabletools.zendesk.com/hc/en-us/articles/360002754518-Audit-Log"
            target="_blank"
          >
            User Guide
          </a>
        </div>
      }
    />
  );
};
