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
            Another way to provide Entitlements in Predefined Config is via a
            Function (the <b>EntitlementLookUpFunction</b> property).
          </p>
          <p>
            Note: you provide the <b>name</b> of function in{' '}
            <a
              href="https://api.adaptabletools.com/interfaces/_src_predefinedconfig_actioncolumnstate_.actioncolumnstate.html"
              target="_blank"
            >
              Entitlements Predefined Config
            </a>
            , but provide the <b>actual function implementation</b> in{' '}
            <a
              href="https://api.adaptabletools.com/modules/_src_adaptableoptions_userfunctions_.html"
              target="_blank"
            >
              UserFunctions
            </a>
            .
          </p>
          <p>
            This allows you to use an external permissioning or entitlment
            server or to do external lookups rather than provide a hard-coded
            list.
          </p>
          <p>
            The function will be run each time an Entitlement is required. It
            receives the id of the AdapTable instance, the current user, and the
            Function and it returns an AccessLevel.
          </p>
          <p>
            If the function returns nothing, the Entitlement is given the
            default Access Level of 'Full' (however this can be changed through
            setting the <b>DefaultAccessLevel</b> property, see{' '}
            <a href="./aggridentitlementsdefaultdemo">Default Demo</a>
            ).
          </p>
          <p>
            In this example the function does 3 things:
            <ul>
              <li>
                For a list of editing-based Functions it returns an AccessLevel
                of <i>Hidden</i> (presumably it wants a non-editable grid).
              </li>
              <li>
                For some other functions it mimics a call to an external
                Permissions Service (which returns an AccessLevel of{' '}
                <i>ReadOnly</i>)
              </li>
              <li>
                For all other AdapTable functions it does nothing meaning that
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
            href="https://api.adaptabletools.com/interfaces/_src_predefinedconfig_entitlementstate_.entitlementstate.html"
            target="_blank"
          >
            Entitlements Config
          </a>{' '}
          |{' '}
          <a
            href="https://api.adaptabletools.com/interfaces/_src_api_entitlementsapi_.entitlementsapi.html"
            target="_blank"
          >
            Entitlements Api
          </a>{' '}
          |{' '}
          <a
            href="https://github.com/AdaptableTools/adaptable/blob/master/packages/adaptable/readme/guides/adaptable-entitlements-guide.md"
            target="_blank"
          >
            Entitlements Guide
          </a>
        </div>
      }
    />
  );
};
