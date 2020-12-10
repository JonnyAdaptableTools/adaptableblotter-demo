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
          <p>
            Currently this grid has 20,0000 rows, sorted by Country (asc) and
            then TradeId (des).
          </p>
          <p>
            Every 10 milliseconds 50 rows will update (5 columns each time) in a
            batch.
          </p>
          <p>
            Every 3 seconds we either add around 100 new rows or delete about
            100 existing rows.
          </p>
          <p>
            We have added a Conditional Style to display the row as yellow where
            the Counterparty is IN ("Rabobank", "Nomura", "MUFJ", "RBS").{' '}
            <b>Note: this is a ticking column</b>
          </p>
          <p>The actual row count is displayed under the grid.</p>
        </div>
      }
    />
  );
};
