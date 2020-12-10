import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/admin/aggridperformancedemo')}
      pageTitle={'Performance Demo'}
      description={
        <div>
          <p>Tests Peformance - WIP!</p>
          <p>Currently this grid has 20,0000 rows.</p>
          <p>
            Every 10 milliseconds 50 rows will update (5 columns each time) in a
            batch.
          </p>
          <p>
            Every 5 seconds we either add 100 new rows or delete 100 existing
            rows.
          </p>
        </div>
      }
    />
  );
};
