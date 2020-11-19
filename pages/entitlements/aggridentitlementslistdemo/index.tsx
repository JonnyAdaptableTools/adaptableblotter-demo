import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import(
        '../../../src/client/entitlements/aggridentitlementslistdemo'
      )}
      pageTitle={'Entitlements List Demo'}
      description={
        <div>
          <p>
            One way to provide Entitlements in Predefined Config is through a
            'hard-coded' list via the <b>FunctionEntitlements</b> property.
          </p>
          <p>
            This allows you to provide a list of Entitlements - essentially a{' '}
            <b>FunctionName</b> and an <b>AccessLevel</b> (either <i>Full</i>,{' '}
            <i>ReadOnly</i> or <i>Hidden</i>).
          </p>
          <p>
            Any Function not given an Entitlement automatically takes the Access
            Level of 'Full'; however this can be changed through setting the{' '}
            <b>DefaultAccessLevel</b> property (see{' '}
            <a href="./aggridentitlementsdefaultdemo">Default Demo</a>
            ).
          </p>
          <p>
            In this example we have created 3 Entitlements (one for each
            AccessLevel):
            <ul>
              <li>
                Cell Summary - set to <i>Hidden</i> with the result that the
                Cell Summary Toolbar, ToolPanel and Menu Option are not
                available anywhere in AdapTable and cannot be accessed by users.
              </li>
              <li>
                Layout - set to <i>ReadOnly</i> with the result that the Layout
                Toolbar (and menu option) is visible and Layouts can be
                selected, but they cannot be created, edited or deleted.
              </li>
              <li>
                Export - set to <i>Full</i> (not strictly required as its the{' '}
                <i>DefaultAccessLevel</i> but here for display purposes) which
                means it can be used without restriction.
              </li>
            </ul>
          </p>
        </div>
      }
      helpResources={
        <div>
          <a
            href="https://docs.adaptabletools.com/docs/predefined-config/entitlements-config"
            target="_blank"
          >
            Entitlements Config
          </a>{' '}
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/adaptable-api/entitlements-apif"
            target="_blank"
          >
            Entitlements Api
          </a>{' '}
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/key-topics/entitlements"
            target="_blank"
          >
            Entitlements Guide
          </a>
        </div>
      }
    />
  );
};
