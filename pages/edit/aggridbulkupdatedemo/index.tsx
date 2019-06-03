import React from 'react';
import DynamicDemoPage from '../../../src/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/aggridbulkupdatedemo')}
      pageTitle={'Bulk Update Demo'}
      description={
        <div>
          <h4>Bulk Update</h4>
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
          <p>
            <b>Adaptable Blotter Help Resources:</b>{' '}
            <a
              href="https://adaptabletools.zendesk.com/hc/en-us/articles/360005168071-Bulk-Update"
              target="_blank"
            >
              User Guide
            </a>
            ,{' '}
            <a
              href="https://adaptabletools.zendesk.com/hc/en-us/articles/360028585192-Advanced-Search-API"
              target="_blank"
            >
              Blotter API
            </a>
            ,{' '}
            <a
              href="https://adaptabletools.zendesk.com/hc/en-us/articles/360009004971-Bulk-Update-FAQ"
              target="_blank"
            >
              FAQ
            </a>
            , and{' '}
            <a
              href="https://adaptabletools.zendesk.com/hc/en-us/articles/360028638032-Bulk-Update-Videos"
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
