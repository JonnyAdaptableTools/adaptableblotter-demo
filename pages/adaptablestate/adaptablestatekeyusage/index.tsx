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
            State - and switch between them and run-time.
          </p>
          <p>
            Note: This is not the same as a Layout which stores Column
            information only: a View can contain anything which is in Predefined
            Config.
          </p>
          <p>
            This demo provides one example for how to do this; it leverages the{' '}
            <b>adaptableStateKey</b> property of{' '}
            <a
              href="https://api.adaptabletools.com/interfaces/_src_adaptableoptions_adaptableoptions_.adaptableoptions.html#adaptablestatekey"
              target="_blank"
            >
              AdaptableOptions
            </a>{' '}
            to provide 2 Predefind Configs.
          </p>
          <p>
            Clicking the button in the dashboard will toggle the view - which
            will change the current AdapTable State key (and also set a new
            Dashboard Header).
          </p>
          <p>
            Note how View1 Predefined Config contains a different Layout,
            GradientColumn Percent Bar, Quick Search text and Format Columns to
            those in View2.
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
            href="https://github.com/AdaptableTools/adaptable/blob/master/packages/adaptable/readme/guides/adaptable-state-guide.md"
            target="_blank"
          >
            Adaptable State Read Me
          </a>{' '}
          |{' '}
          <a
            href="https://api.adaptabletools.com/interfaces/_src_predefinedconfig_predefinedconfig_.predefinedconfig.html"
            target="_blank"
          >
            Predefined Config
          </a>{' '}
          |{' '}
          <a
            href="https://api.adaptabletools.com/interfaces/_src_adaptableoptions_adaptableoptions_.adaptableoptions.html#stateoptions"
            target="_blank"
          >
            Adaptable State Options
          </a>
        </div>
      }
    />
  );
};
