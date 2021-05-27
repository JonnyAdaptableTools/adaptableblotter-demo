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
            that every Module will be available and you need to set those that
            are not.
          </p>
          <p>
            You can change this default behaviour by, for example, setting the
            DefaultAccessLevel to 'Hidden', so that only those Module explicitly
            entitled will be available.
          </p>
          <p>
            In this example we have set the DefaultAccessLevel to 'Hidden' and
            then explicity entitled just those Modules we want our users to
            access.
          </p>
        </div>
      }
      helpResources={
        <div>
          <a
            href="https://v9-0--docs-adaptabletools.netlify.app/docs/adaptable-options/entitlements-options"
            target="_blank"
          >
            Entitlements Options
          </a>{' '}
        </div>
      }
    />
  );
};
