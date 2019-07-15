import React from 'react';
import DynamicDemoPage from '../../../src/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/admin/aggridbigdatademo')}
      pageTitle={'Big Data Demo'}
      description={
        <div>
          <h4>Big Data</h4>
          <p>
            Most of the demos on this site use a version of the Northwind Orders
            demo that has 800 rows. This is done deliberately to show that the
            Adaptable Blotter works with any data set.
          </p>
          <p>
            But we are often asked if the Adaptable Blotter works as well with
            big data sets. So this demo contains 100,000 rows (of random
            meaningless data).
          </p>
          <p>
            The ag-Grid Status Bar at the bottom of the grid will display the
            total (and filtered) number of rows. Create filters, searches, and
            style sand you will see that even with a very large dataset
            everything still works.
          </p>
          <p>
            <b>Note:</b> If you have a DataSet with many hundreds of thousands
            of rows then you will want to use on the Server options available.
          </p>
        </div>
      }
    />
  );
};
