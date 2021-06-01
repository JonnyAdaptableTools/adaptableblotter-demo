import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import(
        '../../../src/client/aggridfeatures/aggridcolumngroupingdemo'
      )}
      pageTitle={'Column Grouping Demo'}
      description={
        <div>
          <p>
            Column Groups are where columns are 'banded' together with a common
            header, and each column can only stay inside the Group.
          </p>
          <p>
            In this demo, 3 sets of <b>column groups</b> have been created:{' '}
            <i>Customer Info</i>, <i>Order</i>, and <i>Shipping Details</i>
          </p>
          <p>
            All other Modules in AdapTable will 'honour' this column grouping
            and work appropriately.
          </p>
          <p>
            For instance if you edit a Layout with Grouped Columns, they will
            marked as such, and the Editor will not allow them to be dragged out
            of their parent group.
          </p>
          <p>
            Likewise the <i>With Special Cols</i> Layout - which includes 2
            special columns (Calculated Column and FreeText Column) - displays
            their position in the Grid as normal.
          </p>
        </div>
      }
      helpResources={
        <div>
          <a
            href="https://docs.adaptabletools.com/docs/key-topics/using-aggrid"
            target="_blank"
          >
            ag-Grid Read Me
          </a>{' '}
        </div>
      }
    />
  );
};
