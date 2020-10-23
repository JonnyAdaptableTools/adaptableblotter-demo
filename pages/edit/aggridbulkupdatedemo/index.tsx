import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/edit/aggridbulkupdatedemo')}
      pageTitle={'Bulk Update Demo'}
      description={
        <div>
          <p>
            The Bulk Update function allows you to update multiple, contiguous
            cells to hold the same value.
          </p>
          <p>
            You can choose either to use an existing value in the cell or to
            enter a new value. All selected cells will update to the new value.
          </p>
          <p>
            Try it out: select cells in any editable column (e.g. 'Employee'),
            and then use the dropdown in the Bulk Update Toolbar to change all
            the cells to a new value that you can select.
          </p>
        </div>
      }
      helpResources={
        <div>
          <a
            href="https://docs.adaptabletools.com/docs/adaptable-functions/bulk-update-function"
            target="_blank"
          >
            Bulk Update Function
          </a>{' '}
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/predefined-config/bulk-update-config"
            target="_blank"
          >
            Bulk Update Config
          </a>{' '}
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/adaptable-api/bulk-update-api"
            target="_blank"
          >
            Bulk Update Api
          </a>{' '}
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/adaptable-options/edit-options"
            target="_blank"
          >
            Edit Options
          </a>
        </div>
      }
    />
  );
};
