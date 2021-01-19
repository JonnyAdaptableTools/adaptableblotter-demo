import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import(
        '../../../src/client/entitlements/aggridreadonlyobjectsdemo'
      )}
      pageTitle={'Read Only Objects Demo'}
      description={
        <div>
          <p>
            Occasionally you might want to make one Adaptable Object ReadOnly
            while keeping the main Entitlement for the Function to be 'Full'.
          </p>
          <p>
            This is possible by setting the <b>IsReadOnly</b> property in the
            Adaptable Object base class to true - this will override the
            Function's Entitlement of 'Full'{' '}
          </p>
          <p>
            Note: This is the <b>only</b> use case where a Function's
            Entitlement is ignored.{' '}
          </p>
          <p>
            In this example we have created set the Layout function to be 'Full'
            and provided 2 Layouts, one of which - 'ReadOnly View' - has
            'IsReadOnly' set to true.
          </p>
          <p>
            This Layout cannot be edited or deleted but the other Layout -
            'Editable View' - which has not been set to ReadOnly can be edited
            normally.{' '}
          </p>
        </div>
      }
      helpResources={
        <div>
          <a
            href="https://docs.adaptabletools.com/docs/key-topics/entitlements"
            target="_blank"
          >
            Entitlements Guide
          </a>{' '}
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/predefined-config/entitlements-config"
            target="_blank"
          >
            Entitlements Config
          </a>{' '}
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/adaptable-api/entitlements-api"
            target="_blank"
          >
            Entitlements Api
          </a>
        </div>
      }
    />
  );
};
