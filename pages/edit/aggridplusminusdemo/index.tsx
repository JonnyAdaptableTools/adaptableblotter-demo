import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/edit/aggridplusminusdemo')}
      pageTitle={'Plus Minus Demo'}
      description={
        <div>
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
        </div>
      }
      helpResources={
        <div>
          <a
            href="https://api.adaptabletools.com/interfaces/_src_predefinedconfig_plusminusstate_.plusminusstate.html"
            target="_blank"
          >
            Predefined Config
          </a>
          ,{' '}
          <a
            href="https://api.adaptabletools.com/interfaces/_src_api_plusminusapi_.plusminusapi.html"
            target="_blank"
          >
            Adaptable API
          </a>
          ,{' '}
          <a
            href="https://adaptabletools.zendesk.com/hc/en-us/articles/360029742892-Plus-Minus-FAQ"
            target="_blank"
          >
            FAQ
          </a>
          ,{' '}
          <a
            href="https://adaptabletools.zendesk.com/hc/en-us/articles/360030079731-Plus-Minus-Videos"
            target="_blank"
          >
            Videos
          </a>
          ,{' '}
          <a
            href="https://adaptabletools.zendesk.com/hc/en-us/articles/360002754698-Edit-Functions"
            target="_blank"
          >
            User Guide
          </a>
          .
        </div>
      }
    />
  );
};
