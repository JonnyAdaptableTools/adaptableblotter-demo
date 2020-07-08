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
            href="https://api.adaptabletools.com/interfaces/_src_predefinedconfig_shortcutstate_.shortcutstate.html"
            target="_blank"
          >
            Predefined Config
          </a>{' '}
          |{' '}
          <a
            href="https://api.adaptabletools.com/interfaces/_src_api_shortcutapi_.shortcutapi.html"
            target="_blank"
          >
            Adaptable API
          </a>
        </div>
      }
    />
  );
};
