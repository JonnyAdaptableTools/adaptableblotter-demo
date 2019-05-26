import React from 'react';
import AgGridDemoPage from '../../src/AgGridDemoPage';
import dynamic from 'next/dynamic';
import config from '../../src/client/aggridworldstatschartingdemo/config';

const DynamicComponent = dynamic(
  () => import('../../src/client/aggridworldstatschartingdemo'),
  {
    loading: () => null,
    ssr: false,
  }
);

export default () => {
  let configJson = JSON.stringify(config, null, 2);
  return (
    <AgGridDemoPage
      pageTitle={'AdaptableBlotter.JS World Stats Charting Demo'}
      description={
        <div>
          <h4>Charts</h4>
          <p>The Adaptable Blotter has powerful charting capabilities.</p>
          <p>
            In this example we have used Chart Predefined Config to create 5
            initial Charts (3 Category and 2 Pie).
          </p>
          <p>
            Note that all charts are 'live', so that they update in line with
            changes to the underlying data, and they are based on visible (not
            all) rows so will update as you filter the Grid.
          </p>
          <p>
            This example has the Chart Options with overriden values. We have
            set <i>displayOnStartUp</i> to be true so you see the currently
            selected chart when the page loads. And we have set <i>showModal</i>{' '}
            to be false so that the chart appears above the grid (and not in a
            popup).
          </p>
        </div>
      }
      config={configJson}
      blotterOptions={
        "primaryKey: 'OrderId',\n" +
        'vendorGrid: gridOptions,\n' +
        "userName: 'Demo User',\n" +
        "blotterId: 'Basic Demo', \n" +
        'predefinedConfig: predefinedConfig' +
        'chartOptions: { \n' +
        'displayOnStartUp: true, \n' +
        'showModal: false, \n' +
        'pieChartMaxItems: 50, \n' +
        '} \n'
      }
    >
      <DynamicComponent />
    </AgGridDemoPage>
  );
};
