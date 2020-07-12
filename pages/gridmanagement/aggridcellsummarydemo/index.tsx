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
            use (some of which work only on numeric columns) and you can provide
            your bespoke summaries.
          </p>
          <p>
            Try it: highlight a group of cells and see the value change in the
            Cell Summmary toolbar. Click the 'info' button to see results of all
            operations or change the selected one by using the dropdown.
          </p>{' '}
          <p>
            Note that the dropdown includes 3 financial summaries
            ('WeightedAverage', 'VWAP' and 'Only'); this is beause we installed
            the{' '}
            <a
              href="https://api.adaptabletools.com/interfaces/_src_adaptableoptions_adaptableoptions_.adaptableoptions.html#plugins"
              target="_blank"
            >
              Financial plugin
            </a>{' '}
            (one of the Plugins that AdapTable provides).
          </p>
          <p>
            To create a Summary Operation: provide the name of the function,
            which will be evaluated each time the summary is run, in{' '}
            <a
              href="https://api.adaptabletools.com/interfaces/_src_predefinedconfig_cellsummarystate_.cellsummarystate.html"
              target="_blank"
            >
              Cell Summary State
            </a>{' '}
            and the actual implementation in{' '}
            <a
              href="https://api.adaptabletools.com/modules/_src_adaptableoptions_userfunctions_.html"
              target="_blank"
            >
              UserFunctions
            </a>
            .
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
            href="https://api.adaptabletools.com/interfaces/_src_predefinedconfig_cellsummarystate_.cellsummarystate.html"
            target="_blank"
          >
            Cell Summary Config
          </a>{' '}
          |{' '}
          <a
            href="https://api.adaptabletools.com/interfaces/_src_api_cellsummaryapi_.cellsummaryapi.html"
            target="_blank"
          >
            Cell Summary Api
          </a>{' '}
          |{' '}
          <a
            href="https://github.com/AdaptableTools/adaptable/blob/master/packages/adaptable/readme/functions/cell-summary-function.md"
            target="_blank"
          >
            Cell Summary Read Me
          </a>{' '}
          |{' '}
          <a
            href="https://api.adaptabletools.com/modules/_src_adaptableoptions_userfunctions_.html"
            target="_blank"
          >
            User Functions
          </a>{' '}
        </div>
      }
    />
  );
};
