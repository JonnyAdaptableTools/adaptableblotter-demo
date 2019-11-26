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
            In this demo you can switch layouts between <i>Pivot View</i> and{' '}
            <i>Non Pivot View</i> and the correct layout (and Pivot Mode) will
            load.
          </p>
          <p>
            <b>Adaptable Blotter Help Resources:</b>{' '}
            <a
              href="https://api.adaptableblotter.com/interfaces/_predefinedconfig_layoutstate_.layoutstate.html"
              target="_blank"
            >
              Predefined Config
            </a>
            .
          </p>
        </div>
      }
    />
  );
};
