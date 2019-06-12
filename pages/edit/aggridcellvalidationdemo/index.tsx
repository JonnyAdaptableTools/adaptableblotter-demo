import React from 'react';
import DynamicDemoPage from '../../../src/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/aggridcellvalidationdemo')}
      pageTitle={'Cell Validation Demo'}
      description={
        <div>
          <h4>Cell Validation Demo</h4>
          <p>
            Use Cell Validation to create rules that will disallow edits (or
            show warnings) if the data changes in ways that you wish to prevent
            or be notified of. This is designed to complement, but not replace,
            server validation.
          </p>
          <p>
            You are able to prevent the edit or to show a warning and when
            creating rules, you can select from a huge list of operators
            regarding the change.
          </p>
          <p>
            This example has 4 Validation Rules: (1) All Edits are prevented in
            the 'Cust Ref' column; (2) warnings are displayed for all edits in
            'Employee' column; (3) The 'Invoiced' Column cannot accept values
            over 3000; and (4) a warning is shown if the 'Order Cost' column
            more than doubles in value.
          </p>
          <p>
            <b>Adaptable Blotter Help Resources:</b>{' '}
            <a
              href="https://adaptabletools.zendesk.com/hc/en-us/articles/360005168091-Cell-Validation"
              target="_blank"
            >
              User Guide
            </a>
            ,{' '}
            <a
              href="https://adaptabletools.zendesk.com/hc/en-us/articles/360028585272-Cell-Validation-API"
              target="_blank"
            >
              Blotter API
            </a>
            ,{' '}
            <a
              href="https://adaptabletools.zendesk.com/hc/en-us/articles/360009005011-Cell-Validation-FAQ"
              target="_blank"
            >
              FAQ
            </a>
            , and{' '}
            <a
              href="https://adaptabletools.zendesk.com/hc/en-us/articles/360028638052-Cell-Validation-Videos"
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
