import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/edit/aggridshortcutdemo')}
      pageTitle={'Shortcut Demo'}
      description={
        <div>
          <p>
            Use Shortcuts to avoid fat finger issues and speed up data entry for
            numeric and date columns.
          </p>
          <p>
            Numeric columns perform an operation. e.g. with a shortcut of 'M'
            which multiplies by a million, then typing 3M will emit 3,000,000.
            For dates the current value is replaced with a new date value.
          </p>
          <p>In this example we created 2 Shortcuts:</p>
          <ul>
            <li>
              a numeric Shortcut where 'K' multiplies numeric cells by 1,000
            </li>
            <li>
              a Date Shortcut where 'N' uses the System Filter of 'Next Working
              Day' to replace the cell contents appropriately.
            </li>
          </ul>
        </div>
      }
      helpResources={
        <div>
          <a
            href="https://v9-0--docs-adaptabletools.netlify.app/docs/adaptable-modules/shortcut-module"
            target="_blank"
          >
            Shortcut Module
          </a>{' '}
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/predefined-config/shortcut-config"
            target="_blank"
          >
            Shortcut Config
          </a>{' '}
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/adaptable-api/shortcut-api"
            target="_blank"
          >
            Shortcut Api
          </a>
          |{' '}
        </div>
      }
    />
  );
};
