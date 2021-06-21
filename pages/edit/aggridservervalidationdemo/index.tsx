import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/edit/aggridservervalidationdemo')}
      pageTitle={'Server Validation Demo'}
      description={
        <div>
          <p>
            With Server Validation, you provide AdapTable with a function that
            returns a Promise and will run (presumably server-side) each time a
            cell is edited allowing you to perform advanced validation.{' '}
          </p>
          <p>
            The return value can be: nothing (the edit works - or you want to
            'swallow' it), the old value (validation failed) or a differnt value
            altogether (in advanced scenarios). You can additionally provide a
            Validation Message.
          </p>
          <p>
            This example has 3 Server Validation Rules for <b>Item Count</b>:
            (1) Edits above 25 are rejected and changed to 25; (2) Edits below 5
            are rejected and changed to 5; (3) Any edit of 17 is (bizarrely)
            rejected outright.{' '}
          </p>
          <p>
            <b>Note:</b>{' '}
            <a href="../alertsmessages/aggridvalidationalertsdemo">
              Prevent Edit Alerts
            </a>{' '}
            takes precedence: we have also created an Alert Definition that an
            edit cannot increase in value by 15; if that rule fails then no
            Server Validation is run.
          </p>
        </div>
      }
      helpResources={
        <div>
          <a
            href="https://docs.adaptabletools.com/docs/adaptable-options/edit-options"
            target="_blank"
          >
            Edit Options
          </a>{' '}
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/key-topics/server-functionality"
            target="_blank"
          >
            Server Functionality Guide
          </a>
        </div>
      }
    />
  );
};
