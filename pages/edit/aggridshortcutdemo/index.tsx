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
            numeric columns.
          </p>
          <p>
            A Shortcut performs a mathematical operation on set of numeric
            columns which match a given Scope.{' '}
          </p>
          <p>
            There are 4 operations available: <b>Addition</b>,{' '}
            <b>Subtraction</b>, <b>Multiplication</b> and <b>Division</b>
          </p>
          <p>In this example we created 2 Shortcuts:</p>
          <ul>
            <li>
              On <b>all numeric</b> columns where 'K' multiplies the cell value
              by 1,000
            </li>
            <li>
              On the <b>Item Count</b> column where 'A' adds 5 to the cell value
            </li>
          </ul>
        </div>
      }
      helpResources={
        <div>
          <a
            href="https://docs.adaptabletools.com/docs/adaptable-modules/shortcut-module"
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
