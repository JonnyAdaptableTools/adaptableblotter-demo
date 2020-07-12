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
            href="https://github.com/AdaptableTools/adaptable/blob/master/packages/adaptable/readme/functions/bulk-update-function.md"
            target="_blank"
          >
            Bulk Update Read Me
          </a>{' '}
          |{' '}
          <a
            href="https://api.adaptabletools.com/interfaces/_src_predefinedconfig_bulkupdatestate_.bulkupdatestate.html"
            target="_blank"
          >
            Bulk Update Config
          </a>{' '}
          |{' '}
          <a
            href="https://api.adaptabletools.com/interfaces/_src_api_bulkupdateapi_.bulkupdateapi.html"
            target="_blank"
          >
            Bulk Update Api
          </a>{' '}
          |{' '}
          <a
            href="https://api.adaptabletools.com/interfaces/_src_adaptableoptions_editoptions_.editoptions.html"
            target="_blank"
          >
            Edit Options
          </a>
        </div>
      }
    />
  );
};
