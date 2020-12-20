import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import(
        '../../../src/client/adaptableoptions/aggridmaclikescrollbars'
      )}
      pageTitle={'Mac Like Scrollbars Demo'}
      description={
        <div>
          <p>
            When running in Windows, by default AdapTable will display native
            scrollbars.
          </p>
          <p>
            However some users prefer to see much thinner and less intrusive
            scrollbars - similar to those available on a Mac.
          </p>
          <p>
            To enable this simply set the{' '}
            <a
              href="https://docs.adaptabletools.com/docs/adaptable-options/user-interface-options"
              target="_blank"
            >
              useCustomMacLikeScrollbars
            </a>{' '}
            property to true in User Interface Options section of AdapTable
            Options (as done here).
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
          </a>{' '}
        </div>
      }
    />
  );
};
