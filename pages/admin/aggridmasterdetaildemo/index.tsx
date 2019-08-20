import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/admin/aggridmasterdetaildemo')}
      pageTitle={'AdaptableBlotter.JS ag-Grid Master Detail Demo'}
      description={
        <div>
          <h4>
            <h4>Master Detail Demo</h4>
          </h4>
          <p>
            This demo show how Master / Details can work in the Adaptable
            Blotter if it is something that is offered by the underlying vendor
            grid (which is in this example that uses ag-Grid) using some
            football teams.
          </p>
          <p>Click on the team to expand to see the players.</p>
        </div>
      }
    />
  );
};
