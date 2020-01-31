import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/admin/aggriddatasourcechangesdemo')}
      pageTitle={'DataSource Changes Demo'}
      description={
        <div>
          <p>
            This demo illustrates what happens when the dataset which provides
            the Data Source for the underlying grid changes.
          </p>
          <p>
            In this example, every second a new row is added to the dataset that
            ag-Grid is using for its datasource, and every 3 seconds a row is
            deleted (see the count in the Status Bar under the grid).
          </p>
          <p>
            AdapTable picks up these changes automatically and works smoothly
            despite the repeated changes to the underlying data set.
          </p>
          <p>
            Note: we sort <b>Trade Id</b> column in descending order, filter{' '}
            <b>Counterparty</b> by 'm', apply a Conditional Style on any rows
            where <b>Currency</b> is 'EUR', 'GBP' or 'USD' and run Quick Search
            on any cells starting with 'I' ('i*').
          </p>
        </div>
      }
    />
  );
};
