import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/charts/aggridpiechartscolumndemo')}
      pageTitle={'Pie Charts Column Demo'}
      description={
        <div>
          <h4>Pie Charts (Column) Demo</h4>
          <p>
            You can see a pie (or doughnut) chart view of a single column by
            clicking 'View as Pie Chart' in the Column Header Menu.
          </p>
          <p>
            As with the main Pie Chart, you can create a threshold (as value or
            %), and manage labels positiion and the order of the slices.
          </p>
          <p>
            Most columns show a simple count of distinct values (e.g. try
            'Employee' column). However where there are multiple values for that
            column, Adaptable will automatically group them (e.g. try 'Invoiced'
            column).
          </p>
          <p>
            If you want to see a pie chart for a subset of values in a column
            then simply select the cells you wish to see and select 'See as Pie
            Chart' from the Context menu.
          </p>
        </div>
      }
    />
  );
};
