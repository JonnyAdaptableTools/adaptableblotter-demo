import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/auditlog/aggridauditchanneldemo')}
      pageTitle={'Audit Log Demo - Publishing to an Http Channel'}
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
            This example sends Cell Edit (we have mock ticking data), User State
            and Function Applied events to a named Http Channel which we specify
            in the <i>httpChannel</i> property in Audit Options.
          </p>
          <p>
            A{' '}
            <a
              href="https://github.com/AdaptableTools/auditlog-server"
              target="_blank"
            >
              demo server
            </a>{' '}
            (built for this purpose) simply returns each message it receives; if
            you have dev tools you can see the messages being sent by the server
            in the network tab.
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
