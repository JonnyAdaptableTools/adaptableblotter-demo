import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/grid/aggridcellsummarydemo')}
      pageTitle={'Cell Summary Demo'}
      description={
        <div>
          <h4>Cell Summary Demo</h4>
          <p>
            Use Cell Summary to see summary information about a group of
            selected cells using a variety of mathematical operations.
          </p>
          <p>
            You can create your own operations or use the ones shippped with
            AdapTable (most of which work only on numeric columns).
          </p>

          <p>
            Try it: highlight a group of cells and see the value change in the
            Cell Summmary toolbar. Click the 'info' button to see results of all
            operations or change the selected one by using the dropdown.
          </p>
          <p>
            You will notice that the example includes 2 financial summaries
            ('VWAP' and 'Only'); this is becuase we have installed and included
            the{' '}
            <a
              href="https://api.adaptableblotter.com/interfaces/_adaptableoptions_adaptableoptions_.adaptableoptions.html#plugins"
              target="_blank"
            >
              Financial plugin
            </a>{' '}
            (one of the Plugins that Adaptable provides).
          </p>
          <p>
            <b>AdapTable Help Resources:</b>{' '}
            <a
              href="https://api.adaptableblotter.com/interfaces/_predefinedconfig_cellsummarystate_.cellsummarystate.html"
              target="_blank"
            >
              Predefined Config
            </a>
            ,{' '}
            <a
              href="https://api.adaptableblotter.com/interfaces/_api_cellsummaryapi_.cellsummaryapi.html"
              target="_blank"
            >
              Adaptable API
            </a>
            ,{' '}
            <a
              href="https://adaptabletools.zendesk.com/hc/en-us/articles/360002755197-Grid-Functions"
              target="_blank"
            >
              User Guide
            </a>
            .
          </p>
        </div>
      }
    />
  );
};
