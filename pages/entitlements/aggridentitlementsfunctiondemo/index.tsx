import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import(
        '../../../src/client/entitlements/aggridentitlementsfunctiondemo'
      )}
      pageTitle={'Entitlements Function Demo'}
      description={
        <div>
          <p>
            Another way to provide Entitlements in{' '}
            <a
              href="https://docs.adaptabletools.com/docs/adaptable-options/entitlements-options"
              target="_blank"
            >
              Adaptable Options
            </a>{' '}
            is via a JavaScript function (which also uses the{' '}
            <b>moduleEntitlement</b> property).
          </p>
          <p>
            This allows you to use an external permissioning or entitlment
            server or to do external lookups rather than provide a hard-coded
            list.
          </p>
          <p>
            The function will be run each time an Entitlement is required. It
            receives the id of the AdapTable instance, the current user, and the
            Module and it returns an AccessLevel.
          </p>
          <p>
            If the function returns nothing, the Entitlement is given the
            default Access Level of 'Full' (this can be changed via the{' '}
            <b>DefaultAccessLevel</b> property, see{' '}
            <a href="./aggridentitlementsdefaultdemo">Default Demo</a>
            ).
          </p>
          <p>
            In this example the function does 3 things:
            <ul>
              <li>
                For a list of editing-based Modules it returns an AccessLevel of{' '}
                <i>Hidden</i> (presumably it wants a non-editable grid).
              </li>
              <li>
                For some other Modules it mimics a call to an external
                Permissions Service (which returns an AccessLevel of{' '}
                <i>ReadOnly</i>)
              </li>
              <li>
                For all other AdapTable Modules it does nothing meaning that
                they will use the Entitlement set by the DefaultAccessLevel
                property.
              </li>
            </ul>
          </p>
        </div>
      }
      helpResources={
        <div>
          <a
            href="https://docs.adaptabletools.com/docs/adaptable-options/entitlements-options"
            target="_blank"
          >
            Entitlements Options
          </a>{' '}
        </div>
      }
    />
  );
};
