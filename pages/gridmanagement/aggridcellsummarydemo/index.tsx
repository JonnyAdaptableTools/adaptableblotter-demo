import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/grid/aggridcellsummarydemo')}
      pageTitle={'Cell Summary Demo'}
      description={
        <div>
          <p>
            Use Cell Summary to see summary information about a group of
            selected cells using a variety of mathematical operations.
          </p>
          <p>
            AdapTable ships with a number of 'Summary Operations' that you can
            use (some of which work only on numeric columns).
          </p>
          <p>
            Try it: highlight a group of cells and see the value change in the
            Cell Summmary toolbar. Click the 'info' button to see results of all
            operations or change the selected one by using the dropdown.
          </p>{' '}
          <p>
            Note that the dropdown includes 2 financial summaries ('VWAP' and
            'Only'); this is becuase we installed and included the{' '}
            <a
              href="https://api.adaptabletools.com/interfaces/_adaptableoptions_adaptableoptions_.adaptableoptions.html#plugins"
              target="_blank"
            >
              Financial plugin
            </a>{' '}
            (one of the Plugins that AdapTable provides).
          </p>
          <p>
            You can also create your own Summary Operations by providing a
            function which will be evaluated each time the summary is run.{' '}
          </p>
          <p>
            In this example we have provided an 'Oldest' function which runs
            only on Date columns and returns the oldest date in the selection.
          </p>
        </div>
      }
      helpResources={
        <div>
          <a
            href="https://api.adaptabletools.com/interfaces/_predefinedconfig_cellsummarystate_.cellsummarystate.html"
            target="_blank"
          >
            Predefined Config
          </a>
          ,{' '}
          <a
            href="https://api.adaptabletools.com/interfaces/_api_cellsummaryapi_.cellsummaryapi.html"
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
        </div>
      }
    />
  );
};
