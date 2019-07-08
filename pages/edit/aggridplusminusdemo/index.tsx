import React from 'react';
import DynamicDemoPage from '../../../src/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/edit/aggridplusminusdemo')}
      pageTitle={'Plus Minus Demo'}
      description={
        <div>
          <h4>Plus Minus Demo</h4>
          <p>
            Plus Minus function allows you to creage 'Nudge Rules' which react
            to the '+' or '-' keys being pressed in numeric cells.
          </p>
          <p>
            You can create a 'default' Nudge Value for a whole column, or a
            'custom' Nudge Value which will increment / decrement based on other
            cells in the row.
          </p>
          <p>
            In this example we created 2 Plus Minus Rules: a default one for the
            'Item Cost' column of 10, and a custom rule for the same column
            which will increment / decrement by 20 if Employee is 'Janet
            Leverling'.
          </p>
          <p>
            <b>Adaptable Blotter Help Resources:</b>{' '}
            <a
              href="https://adaptabletools.zendesk.com/hc/en-us/articles/360005168111-Plus-Minus"
              target="_blank"
            >
              User Guide
            </a>{' '}
            -{' '}
            <a
              href="https://api.adaptableblotter.com/interfaces/_predefinedconfig_runtimestate_plusminusstate_.plusminusstate.html"
              target="_blank"
            >
              Predefined Config
            </a>{' '}
            -{' '}
            <a
              href="https://api.adaptableblotter.com/interfaces/_api_interface_iplusminusapi_.iplusminusapi.html"
              target="_blank"
            >
              Blotter API
            </a>{' '}
            -{' '}
            <a
              href="https://adaptabletools.zendesk.com/hc/en-us/articles/360029742892-Plus-Minus-FAQ"
              target="_blank"
            >
              FAQ
            </a>{' '}
            -{' '}
            <a
              href="https://adaptabletools.zendesk.com/hc/en-us/articles/360030079731-Plus-Minus-Videos"
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
