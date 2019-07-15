import React from 'react';
import DynamicDemoPage from '../../../src/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/style/aggridconditionalstyledemo')}
      pageTitle={'Conditional Style Demo'}
      description={
        <div>
          <h4>Conditional Style Demo</h4>
          <p>
            Conditional Styles allow you to create rules that decide how columns
            and rows are styled.
          </p>
          <p>
            Rules work at either column or row level; when the rule is met the
            column / row is styled according to the style set out in the rule.
            Alternatively you can specify a css style name (which you provide).
          </p>
          <p>
            This example has 4 Conditional Styles: (1, 2) The 'Change Last
            Order' column is green when positive and red when negative; (3) Any
            row where the 'Item Cost' column is > 80 has a yellow background and
            italic foreground; and (4) the font is bold where the 'Package Cost'
            column is less than 10.
          </p>

          <p>
            <b>Adaptable Blotter Help Resources:</b>{' '}
            <a
              href="https://adaptabletools.zendesk.com/hc/en-us/articles/360005113372-Conditional-Styles"
              target="_blank"
            >
              User Guide
            </a>{' '}
            -{' '}
            <a
              href="https://api.adaptableblotter.com/interfaces/_predefinedconfig_runtimestate_conditionalstylestate_.conditionalstylestate.html"
              target="_blank"
            >
              Predefined Config
            </a>{' '}
            -{' '}
            <a
              href="https://api.adaptableblotter.com/interfaces/_api_interface_iconditionalstyleapi_.iconditionalstyleapi.html"
              target="_blank"
            >
              Blotter API
            </a>{' '}
            -{' '}
            <a
              href="https://adaptabletools.zendesk.com/hc/en-us/articles/360029742932-Conditional-Styles-FAQ"
              target="_blank"
            >
              FAQ
            </a>{' '}
            -{' '}
            <a
              href="https://adaptabletools.zendesk.com/hc/en-us/articles/360030602892-Conditional-Style-Videos"
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
