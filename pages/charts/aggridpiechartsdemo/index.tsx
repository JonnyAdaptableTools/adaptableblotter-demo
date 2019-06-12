import React from 'react';
import DynamicDemoPage from '../../../src/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/aggridpiechartsdemo')}
      pageTitle={'AdaptableBlotter.JS ag-Grid Pie Charts Demo'}
      description={
        <div>
          <h4>Pie Charts Demo</h4>
          <p>
            Pie Charts enable you to see your data in a segmented way. You can
            run pie charts either through the Charting Wizard or through a
            Column Header menu.
          </p>
          <p>
            When there are many values in each segment the Adaptable Blotter
            will automatically group them for you.
          </p>
          <p>
            You are able to sort and position the values how you want, and you
            can use 'Others' to group small items into a single segment (and see
            as % or value).
          </p>
          <p>
            Note: In this example the{' '}
            <a
              href="https://adaptabletools.zendesk.com/hc/en-us/articles/360028584692-Chart-Options"
              target="_blank"
            >
              Chart Options
            </a>{' '}
            has overriden values. We set <i>displayOnStartUp</i> to true so you
            see the currently selected chart when the page loads, and{' '}
            <i>showModal</i> to false so that the chart appears above the grid
            (and not in a popup).
          </p>
        </div>
      }
    />
  );
};
