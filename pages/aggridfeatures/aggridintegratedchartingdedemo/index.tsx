import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import(
        '../../../src/client/aggridfeatures/aggridintegratedchartingdedemo'
      )}
      pageTitle={'Integrated Charting Demo'}
      description={
        <div>
          <p>
            ag-Grid offers powerful charting capabiities both{' '}
            <a
              href="https://www.ag-grid.com/documentation/javascript/integrated-charts/"
              target="_blank"
            >
              integrated
            </a>{' '}
            and{' '}
            <a
              href="https://www.ag-grid.com/documentation/javascript/charts/"
              target="_blank"
            >
              standalone
            </a>{' '}
            .
          </p>
          <p>
            AdapTable fully supports both of these charting modes e.g. any edits
            made to data through AdapTable functions like Smart Edit will be
            reflected in the chart.
          </p>
          <p>
            However note that everything is done through ag-Grid - by setting
            'enableCharts' and 'chartThemes' in GridOptions.
          </p>
        </div>
      }
      helpResources={
        <div>
          <a
            href="https://www.ag-grid.com/documentation/javascript/integrated-charts/"
            target="_blank"
          >
            ag-Grid Integrated Charts
          </a>{' '}
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/key-topics/using-aggrid"
            target="_blank"
          >
            Adatable and ag-Grid Read Me
          </a>
        </div>
      }
    />
  );
};
