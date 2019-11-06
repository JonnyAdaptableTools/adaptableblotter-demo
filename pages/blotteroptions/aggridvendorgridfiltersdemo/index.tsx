import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import(
        '../../../src/client/blotteroptions/aggridvendorgridfiltersdemo'
      )}
      pageTitle={'AdaptableBlotter.JS ag-Grid Vendor Grid Filters Demo'}
      description={
        <div>
          <h4>Vendor Grid Filters Demo</h4>
          <p>
            By default the Adaptable Blotter will use its Quick Filter (the row
            under the toolbar) and FilterForm (the second item in the Column
            menu).
          </p>
          <p>
            If you prefer, you can use those provided by ag-Grid which are also
            highly advanced. You do this by setting the{' '}
            <b>useAdaptableBlotterQuickFilter</b> and{' '}
            <b>useAdaptableBlotterFilterForm</b> properties in{' '}
            <i>FilterOptions</i>.
          </p>
          <p>
            Any filters created with these forms will NOT be stored with your
            Adaptable Blotter state, e.g. if you type in the 'Ship Via' Floating
            Filter bar, the Column Filter toolbar does <b>not</b> update.
          </p>
          <p>
            This example we are using ag-Grid's Floating Filter and Filter Form.
            The Employee and Ship Country columns are using the{' '}
            <i>agSetColumnFilter</i> type.
          </p>
          <p>
            <b>Adaptable Blotter Help Resources:</b>{' '}
            <a
              href="https://api.adaptableblotter.com/interfaces/_blotteroptions_filteroptions_.filteroptions.html"
              target="_blank"
            >
              Blotter Options
            </a>{' '}
          </p>{' '}
        </div>
      }
    />
  );
};
