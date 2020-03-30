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
            Turn on Bulk Update in the Bulk Update toolbar and select cells in
            any editable column (e.g. 'Employee'). Then use the Bulk Update
            dropdown to change all the cells to the new value by clicking the
            tick.
          </p>
        </div>
      }
      helpResources={
        <div>
          <a
            href="https://api.adaptabletools.com/interfaces/_src_predefinedconfig_bulkupdatestate_.bulkupdatestate.html"
            target="_blank"
          >
            Predefined Config
          </a>{' '}
          |{' '}
          <a
            href="https://api.adaptabletools.com/interfaces/_src_api_bulkupdateapi_.bulkupdateapi.html"
            target="_blank"
          >
            Adaptable API
          </a>{' '}
        </div>
      }
    />
  );
};
