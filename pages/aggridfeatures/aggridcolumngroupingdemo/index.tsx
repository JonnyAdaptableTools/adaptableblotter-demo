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
            other): <i>Customer Info</i>, <i>Order</i>, and
            <i>Shipping Details</i>
          </p>
        </div>
      }
    />
  );
};
