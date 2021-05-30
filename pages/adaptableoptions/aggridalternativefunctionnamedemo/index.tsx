import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import(
        '../../../src/client/adaptableoptions/aggridalternativefunctionnamedemo'
      )}
      pageTitle={'Custom Module Name Demo'}
      description={
        <div>
          <p>
            AdapTable allows you to provide custom Module names in place of the
            ones supplied by the System.
          </p>
          <p>
            This (admittedly rarely-used) Option is useful if the containing
            Application already has its own window / menu with functionality of
            the same name, e.g. 'Dashboard' or 'Search'.
          </p>
          <p>
            Simply provide the name of the new Module in the{' '}
            <i>alternativeModuleNames</i> property of{' '}
            <a
              href="https://v9-0--docs-adaptabletools.netlify.app/docs/adaptable-options/general-options"
              target="_blank"
            >
              General Options
            </a>{' '}
            section of <i>Adaptable Options</i>.{' '}
          </p>
          <p>
            In this example we have renamed the 'Dashboard' module as{' '}
            <b>Grid Header</b>
          </p>
        </div>
      }
      helpResources={
        <div>
          <a
            href="https://v9-0--docs-adaptabletools.netlify.app/docs/adaptable-options/general-options"
            target="_blank"
          >
            General Options
          </a>{' '}
        </div>
      }
    />
  );
};
