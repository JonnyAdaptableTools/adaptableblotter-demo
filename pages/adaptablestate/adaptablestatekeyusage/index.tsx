import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/adaptablestate/adaptablestatekeyusage')}
      pageTitle={'Multiple Views'}
      description={
        <div>
          <p>
            Advanced Users of AdapTable often ask how they can create multiple
            'Views' - ie. different, separate, named collections of Adaptable
            State - and switch between them at run-time.
          </p>
          <p>
            Note: This is not the same as a{' '}
            <a href="../../layout" target="_self">
              Layout
            </a>{' '}
            which stores Column information only: a View can contain anything
            which is in Predefined Config.
          </p>
          <p>
            This demo provides an example for one way to accomplish this; it
            leverages the <b>adaptableStateKey</b> property of{' '}
            <a
              href="https://docs.adaptabletools.com/docs/adaptable-options/base-options#adaptablestatekey"
              target="_blank"
            >
              AdaptableOptions
            </a>{' '}
            to provide 2 Predefined Configs.
          </p>
          <p>
            Clicking the button in the dashboard header will toggle the view -
            which will change the current AdapTable State key (and also set a
            new Dashboard Title).
          </p>
          <p>
            Note how View1 Predefined Config contains a different Layout,
            Gradient Column, Percent Bar, Quick Search text and Format Columns
            to those in View2.
          </p>{' '}
          <p>
            Likewise the State in each View can be modified and will be
            automaticaly persisted - for that View only.
          </p>
        </div>
      }
      helpResources={
        <div>
          <a
            href="https://docs.adaptabletools.com/docs/key-topics/state-guide"
            target="_blank"
          >
            Adaptable State Read Me
          </a>{' '}
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/predefined-config/predefined-config-overview"
            target="_blank"
          >
            Predefined Config
          </a>{' '}
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/adaptable-options/state-options"
            target="_blank"
          >
            Adaptable State Options
          </a>
        </div>
      }
    />
  );
};
