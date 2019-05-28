import React from 'react';
import DynamicDemoPage from '../../../src/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/aggridgroupingdemo')}
      pageTitle={'AdaptableBlotter.JS ag-Grid Grouping Demo'}
      description={
        <div>
          <h4>
            A demo of AdaptableBlotter.JS integrating with the first-rate
            grouping (both column and row) and pivoting capabilities of ag-Grid.
          </h4>
          <p>
            The following properties have been set for the columns in the
            Dataset (using Microsoft's famous Northwind dummy data dataset)
            <br />3 columns have
            <b>row grouping</b> applied on them:
            <i>Ship Country</i> (on by default),
            <i>Employee</i> and
            <i>Ship Via</i>
            <br />3 columns have
            <b>aggregation</b> applied and so can be used in pivoting:
            <i>Freight</i>,<i>Order Cost</i> and
            <i>Item Count</i>
            <br />3 sets of
            <b>column groups</b> have been created (this is where columns are
            'banded' together and cannot be separated from each other):
            <i>Customer Info</i>,<i>Order</i>, and
            <i>Shipping Details</i>
            <br />3 columns have
            <b>sum aggregation</b> set so that you can see their sum totals when
            the grouped row collapsed from each other):
            <i>Order Cost</i>,<i>Package Cost</i>, and
            <i>Item Count</i>
            <br />
            All the many Adaptable Blotter functions continue to work the same
            regardless of whether the grid is in normal, grouped or pivoting
            mode.
            <br />
          </p>
        </div>
      }
    />
  );
};
