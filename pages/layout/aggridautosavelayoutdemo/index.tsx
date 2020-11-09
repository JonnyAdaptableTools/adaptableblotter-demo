import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/layout/aggridautosavelayoutdemo')}
      pageTitle={'AutoSave Layout Demo'}
      description={
        <div>
          <p>
            Layouts can be updated automatically through the{' '}
            <b>autoSaveLayouts</b> property in{' '}
            <a
              href="https://docs.adaptabletools.com/docs/adaptable-options/layout-options"
              target="_blank"
            >
              Layout Options
            </a>
            .{' '}
          </p>
          <p>
            This property is set to <b>true</b> by default and so layouts will
            generally save automatically meaning any changes will be persisted
            and available when the Layout next loads.
          </p>
          <p>
            If the <i>autoSaveLayouts</i> property is set to <b>false</b> (as in
            this example) the Layout will <b>not automatically save</b>; instead
            a <b>Save Button</b> will display allowing manual saving.
          </p>
        </div>
      }
      helpResources={
        <div>
          <a
            href="https://docs.adaptabletools.com/docs/adaptable-functions/layout-function"
            target="_blank"
          >
            Layout Function
          </a>{' '}
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/predefined-config/layout-config"
            target="_blank"
          >
            Layout Predefined Config
          </a>{' '}
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/adaptable-options/layout-options"
            target="_blank"
          >
            Layout Options
          </a>{' '}
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/adaptable-api/layout-api"
            target="_blank"
          >
            Layout Api
          </a>{' '}
        </div>
      }
    />
  );
};
