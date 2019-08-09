import React from 'react';
import DynamicDemoPage from '../../../src/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/admin/aggridrowselectiondemo')}
      pageTitle={'Row Selection Demo'}
      description={
        <div>
          <h4>Row Selection Demo</h4>
          <p>
            One of the events published by the Adaptable Blotter is Selection
            Changed.
          </p>
          <p>
            This gives full details of which cells and rows are selected,
            allowing you to perform any subsequent activity as required.
          </p>
          <p>
            The row information contains not just the row name and data but also
            whether its group, opened, master / child etc.
          </p>
          <p>
            In this demo we have set <i>rowSelection</i> in ag-Grid to
            'multiple' in order to be able to select multiple rows, and both
            group headers and grouped rows.
          </p>
          <p>
            We are listening to the Adaptable Blotter SelectionChanged event and
            printing out the results to the console. Open the console to see the
            output each time cell or row selection changes.
          </p>
        </div>
      }
    />
  );
};
