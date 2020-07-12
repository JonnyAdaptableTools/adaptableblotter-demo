import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import(
        '../../../src/client/entitlements/aggridentitlementsdefaultdemo'
      )}
      pageTitle={'Entitlements DefaultAccessLevel Demo'}
      description={
        <div>
          <p>
            When setting Entitlements you can provide a value for the{' '}
            <b>DefaultAccessLevel</b> property.
          </p>
          <p>
            If not provided this property will default to 'Full' which means
            that every Function will be available and you need to set those that
            are not.
          </p>
          <p>
            You can change this default behaviour by, for example, setting the
            DefaultAccessLevel to 'Hidden', so that only those Functions
            explicitly entitled will be available.
          </p>
          <p>
            In this example we have set the DefaultAccessLevel to 'Hidden' and
            then explicity entitled just those Functions we want our users to
            access.
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
