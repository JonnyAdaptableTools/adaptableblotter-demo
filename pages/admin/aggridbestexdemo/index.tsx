import React from 'react';
import DynamicDemoPage from '../../../src/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/admin/aggridbestexdemo')}
      pageTitle={'Best Execution Demo'}
      description={
        <div>
          <h4>Best Execution Demo</h4>
          <p>To do</p>
          <p>
            You can choose to send any (or all) of <b>Cell Edit</b>,{' '}
            <b>User State</b>, <b>Function Applied</b> and <b>Internal State</b>{' '}
            changes to the Audit Log.{' '}
          </p>
          <p>
            And you can decide how the Audit Log will make these messages
            available: stream to an HTTP Channel, log to the Console or fire an
            event.
          </p>
          <p>
            This example fires Cell Edit, User State and Function Applied events
            to the Console; open the Console in Developer Tools and see the
            messages appear as you edit data and create objects in the Blotter.
          </p>
        </div>
      }
    />
  );
};
