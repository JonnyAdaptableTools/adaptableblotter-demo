import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import(
        '../../../src/client/adaptableoptions/aggridalternativefunctionnamedemo'
      )}
      pageTitle={'Custom Function Name Demo'}
      description={
        <div>
          <p>
            AdapTable allows you to provide your own Application Icon via the{' '}
            <a
              href="https://docs.adaptabletools.com/docs/adaptable-options/user-interface-options"
              target="_blank"
            >
              User Interface Options
            </a>{' '}
            section of <i>Adaptable Options</i>.
          </p>
          <p>
            If provided, the icon will appear in the top left hand corner of the
            Dashboard - and potentially in other places in AdapTable (e.g.
            OpenFin notifications).
          </p>
          <p>
            In this example we have passed in the Adaptable Tools icon as the{' '}
            <a
              href="https://docs.adaptabletools.com/api/applicationicon"
              target="_blank"
            >
              Application Icon
            </a>{' '}
            object and set a size of 25 pixels for both width and height.{' '}
          </p>
        </div>
      }
      helpResources={
        <div>
          <a
            href="https://docs.adaptabletools.com/docs/adaptable-options/user-interface-options"
            target="_blank"
          >
            User Interface Options
          </a>
        </div>
      }
    />
  );
};
