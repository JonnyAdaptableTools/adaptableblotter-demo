import React from 'react';
import DynamicDemoPage from '../../../src/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/aggridpiechartsdemo')}
      pageTitle={'AdaptableBlotter.JS ag-Grid Pie Charts Demo'}
      description={
        <div>
          <h4>Pie Charts</h4>
          <p>
            This example has the Chart Options with overriden values. We have
            set <i>displayOnStartUp</i> to be true so you see the currently
            selected chart when the page loads. And we have set <i>showModal</i>{' '}
            to be false so that the chart appears above the grid (and not in a
            popup).
          </p>
        </div>
      }
    />
  );
};
