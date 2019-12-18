import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/charts/aggridsparklinechartsdemo')}
      pageTitle={'Sparkline Charts Demo'}
      description={
        <div>
          <h4>Sparkline Charts Demo</h4>
          <p>Sparklines enable you to see your data as a range.</p>
          <p>
            They are most useful, and most typically used, within a column (see
            the{' '}
            <a href="../column/aggridsparklinecolumnsdemo" target="_self">
              Sparkline Column demo
            </a>
            ) but you can create a Sparkline Chart where it makes sense to do
            so.
          </p>
          <p>
            In this example we have created a Sparkline Chart showing all Change
            of Years where the Currency is 'USD'.
          </p>
          <p>
            By default all charts are live so as you change the data in the grid
            the chart will update automatically.
          </p>
          <p>
            <b>Adaptable Blotter Help Resources:</b>{' '}
            <a
              href="https://adaptabletools.zendesk.com/hc/en-us/articles/360002755217-Chart-Functionss"
              target="_blank"
            >
              User Guide
            </a>
          </p>
        </div>
      }
    />
  );
};
