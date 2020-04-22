import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/aggridfeatures/aggridfixedcolumndemo')}
      pageTitle={'Fixed Column Demo'}
      description={
        <div>
          <p>
            ag-Grid offers a useful property in GridOptions called{' '}
            <a
              href="https://www.ag-grid.com/javascript-grid-column-moving/#lock-position"
              target="_blank"
            >
              <b>lockPosition</b>
            </a>
            .
          </p>
          <p>
            As the name suggests this locks a column in position (usually the
            first column) and means that other columns cannot be placed in front
            of it, and it cannot be removed from the Grid.
          </p>
          <p>
            This is particularly useful if you have a column which you always
            want to be visible.
          </p>
          <p>
            In this demo the <i>Order Id</i> column has been locked
          </p>
        </div>
      }
    />
  );
};
