import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/edit/aggridreadonlycellsdemo')}
      pageTitle={'ReadOnly Cells Demo'}
      description={
        <div>
          <p>
            Columns can be marked as ReadOnly in ag-Grid (by setting{' '}
            <i>editable</i> to 'false' in GridOptions) and AdapTable will
            respect that.
          </p>
          <p>
            But sometimes a more granular or dynamic approach is required, where
            different cells in the same column can be editable or Readonly
            depending on row data.
          </p>
          <p>
            For this reason AdapTable provides the <b>isCellEditable</b>{' '}
            function / property in{' '}
            <a
              href="https://docs.adaptabletools.com/docs/adaptable-options/edit-options"
              target="_blank"
            >
              Edit Options
            </a>{' '}
            which allows a decision to be made on a cell by cell basis.
          </p>
          <p>
            In this demo we have provided an implementation which contains 4
            rules:
          </p>
          <ul>
            <li>
              Only rows where <i>Ship Via</i> is 'Federal Shipping' are editable
              - this uses the node object provided in the function.
            </li>
            <li>
              The <i>Item Count</i> column is not editable for cells with a
              value over 7 - this uses the Grid Cell object provided in the
              function.
            </li>
            <li>
              The <i>Order Cost, Package Cost, Item Cost</i> columns are not
              editable where <i>Order Chang</i>e is negative
            </li>
            <li>
              The <i>Order Id</i> is never editable
            </li>
          </ul>
          <p>
            Additionally in{' '}
            <a
              href="https://docs.adaptabletools.com/docs/adaptable-options/user-interface-options"
              target="_blank"
            >
              User Interface Options
            </a>{' '}
            you can provide a <b>readOnlyCellStyle</b> (or an{' '}
            <b>editableCellStyle</b>) to more clearly visually demonstrate which
            cells are editable or not.
          </p>
          <p>
            In this demo we have set an editableCellStyle so that cells which
            can be edited display a Green border.
          </p>
        </div>
      }
      helpResources={
        <div>
          <a
            href="https://docs.adaptabletools.com/docs/adaptable-options/edit-options"
            target="_blank"
          >
            Edit Options
          </a>{' '}
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/adaptable-options/user-interface-options"
            target="_blank"
          >
            User Interface Options
          </a>{' '}
        </div>
      }
    />
  );
};
