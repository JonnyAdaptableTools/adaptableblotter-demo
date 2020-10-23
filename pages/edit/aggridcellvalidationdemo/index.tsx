import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/edit/aggridcellvalidationdemo')}
      pageTitle={'Cell Validation Demo'}
      description={
        <div>
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
            This example has 4 Validation Rules:{' '}
            <ul>
              <li>All Edits are prevented in the 'Cust Ref' column</li>
              <li>warnings are displayed for all edits in 'Employee' column</li>
              <li>Invoiced' Column cannot accept values over 3000</li>
              <li>
                a warning is shown if the 'Order Cost' column more than doubles
                in value
              </li>
            </ul>
            Note: these cell validation rules apply also when you perfrom a
            Smart Edit or Bulk Update.
          </p>
        </div>
      }
      helpResources={
        <div>
          <a
            href="https://docs.adaptabletools.com/docs/predefined-config/cell-validation-config"
            target="_blank"
          >
            Cell Validation Config
          </a>{' '}
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/adaptable-api/cell-validation-api"
            target="_blank"
          >
            Cell Validation Api
          </a>
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/adaptable-functions/cell-validation-function"
            target="_blank"
          >
            Cell Validation Read Me
          </a>
        </div>
      }
    />
  );
};
