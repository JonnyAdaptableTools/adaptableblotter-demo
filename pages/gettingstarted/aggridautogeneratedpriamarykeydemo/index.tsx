import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import(
        '../../../src/client/gettingstarted/aggridautogeneratedpriamarykeydemo'
      )}
      pageTitle={'AutoGenerated Primary Key Demo'}
      description={
        <div>
          <p>
            AdapTable requires a{' '}
            <a
              href="https://docs.adaptabletools.com/docs/key-topics/primary-key"
              target="_blank"
            >
              Primary Key
            </a>{' '}
            for much of functionality to work (as it is used to identify each
            row).
          </p>
          <p>
            Occasionally, however, this cannot be provided - when users are not
            able to identify a column in their data which they can guarantee to
            contain unique data.
          </p>
          <p>
            When this happens, set <b>autogeneratePrimaryKey</b> to true in{' '}
            <a
              href="https://docs.adaptabletools.com/docs/adaptable-options/base-options"
              target="_blank"
            >
              Adaptable Options
            </a>{' '}
            and AdapTable will create one for you.{' '}
          </p>
          <p>
            This should only be used as a last resort and there a few
            limitations which AdapTable requires.
          </p>
          <p>
            The primary restriction is that all Grid data-related methods
            (creating, updating and deleting) need to be done via the{' '}
            <a
              href="https://docs.adaptabletools.com/docs/adaptable-api/grid-api"
              target="_blank"
            >
              Grid Api
            </a>{' '}
            will create one for you.
          </p>
          <p>
            This demo is identical to the{' '}
            <a href="./aggridbasicsetupdemo" target="_blank">
              Basic Set up Demo
            </a>{' '}
            but with the Primary Key autogenerated.
          </p>
          <p>
            As you can see initial data set up is done via the Grid Api.
            Likewise with data updating and deleting (use the 2 buttons in the
            Custom Toolbar to see this in action).
          </p>
        </div>
      }
      helpResources={
        <div>
          <a
            href="https://docs.adaptabletools.com/docs/adaptable-api/grid-api"
            target="_blank"
          >
            Grid Api
          </a>{' '}
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/key-topics/primary-key"
            target="_blank"
          >
            Primary Key
          </a>{' '}
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/adaptable-options/base-options"
            target="_blank"
          >
            Adaptable Options
          </a>{' '}
        </div>
      }
    />
  );
};
