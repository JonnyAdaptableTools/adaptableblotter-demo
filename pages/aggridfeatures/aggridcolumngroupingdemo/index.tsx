import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import(
        '../../../src/client/aggridfeatures/aggridcolumngroupingdemo'
      )}
      pageTitle={'AdaptableBlotter.JS ag-Grid Column Grouping Demo'}
      description={
        <div>
          <h4>
            <h4>Column Grouping Demo</h4>
          </h4>
          <p>
            3 sets of <b>column groups</b> have been created (this is where
            columns are 'banded' together and cannot be separated from each
            other): <i>Customer Info</i>, <i>Order</i>, and{' '}
            <i>Shipping Details</i>
          </p>
          <p>
            Note that the other functions in the Adaptable Blotter will 'honour'
            this column grouping and work appropriately.
          </p>
          <p>
            For instance if you load the <i>With Special Cols</i> Layout, you
            will see that it includes 2 special columns (Calculated Column and
            FreeText Column), that appear - and position - in the Grid as
            normal.
          </p>
        </div>
      }
    />
  );
};
