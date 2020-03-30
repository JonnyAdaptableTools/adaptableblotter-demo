import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/auditlog/aggridauditalertdemo')}
      pageTitle={'Audit Log Demo - Displaying an Alert'}
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
            This example fires 'Cell Edit' and 'Function Applied' Audit Log
            Messages as Alerts.{' '}
          </p>
          <p>
            Note: we have set <i>alertShowAsPopup</i> in Audit Options to false,
            and made the Alert toolbar visible in Dashboard Predefined Config.{' '}
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
