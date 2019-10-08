import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/aggridfeatures/aggridpivotingdemo')}
      pageTitle={'AdaptableBlotter.JS ag-Grid Pivoting Demo'}
      description={
        <div>
          <h4>
            <h4>Pivoting Demo</h4>
          </h4>
          <p>
            ag-Grid has incredible pivoting capability; the Adaptable Blotter
            knows when the grid's in pivoting mode (click 'Pivot Mode' checkbox
            in the tool panel) and will react accordingly.
          </p>
          <p>
            The Adaptable Blotter also allows you to save pivoting information
            in your layout and then it will be available each time you select
            that layout.
          </p>
          <p>
            <b>Try it yourself: </b>Select the 'Pivot Layout' from the Layout
            dropdown, go into pivot mode and start to pivot the grid by moving
            columns into 'Row Groups', 'Values' and 'Column Labels'.
          </p>
          <p>
            Now if you move from the 'Pivot Layout' to the 'Non Pivot Layout'
            (or to clear all layouts) and then back in you will see the Pivot
            mode return.
          </p>
        </div>
      }
    />
  );
};
