import React from 'react';
import DynamicDemoPage from '../../../src/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/edit/aggridshortcutdemo')}
      pageTitle={'Shortcut Demo'}
      description={
        <div>
          <h4>Keyboard Shortcuts Demo</h4>
          <p>
            Use Shortcuts to avoid fat finger issues and speed data entry for
            numeric and date columns.
          </p>
          <p>
            Numeric columns perform an operation. e.g. with a shortcut of 'M'
            which multiplies by a million, then typing 3M will emit 3,000,000.
            For dates the current value is replaced with a new date value.
          </p>
          <p>
            In this example we created 2 Shortcuts: numeric one where 'K'
            multiplies numeric cells by 1,000, a Date shortcut where 'N' uses
            the System Filter of 'Next Working Day' to replace the cell contents
            appropriately.
          </p>
          <p>
            <b>Adaptable Blotter Help Resources:</b>{' '}
            <a
              href="https://adaptabletools.zendesk.com/hc/en-us/articles/360005113352-Shortcuts"
              target="_blank"
            >
              User Guide
            </a>
            ,{' '}
            <a
              href="https://adaptabletools.zendesk.com/hc/en-us/articles/360028587212-Shortcut-Config"
              target="_blank"
            >
              Predefined Config
            </a>
            ,{' '}
            <a
              href="https://adaptabletools.zendesk.com/hc/en-us/articles/360028899451-Shortcut-API"
              target="_blank"
            >
              Blotter API
            </a>
            ,{' '}
            <a
              href="https://adaptabletools.zendesk.com/hc/en-us/articles/360009005171-Shortcuts-FAQ"
              target="_blank"
            >
              FAQ
            </a>
            , and{' '}
            <a
              href="https://adaptabletools.zendesk.com/hc/en-us/articles/360028952951-Shortcut-Videos"
              target="_blank"
            >
              Videos
            </a>
            .
          </p>
        </div>
      }
    />
  );
};
