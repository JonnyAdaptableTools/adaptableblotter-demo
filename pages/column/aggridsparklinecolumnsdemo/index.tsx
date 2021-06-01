import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/column/aggridsparklinecolumnsdemo')}
      pageTitle={'Sparkline Columns Demo'}
      description={
        <div>
          <p>
            Sparkline Columns are ideal for when you have an array of (numeric)
            data in a single cell (e.g. Price data). In this example the{' '}
            <b>History</b> column is shown as a Sparkline.
          </p>
          <p>
            The Sparkline Column shows that data either as a line, a series of
            columns or an area graph.
          </p>
          <p>
            You cannot create or delete Sparkline Columns at run-time but you
            can edit them (e.g. change the line colour or show tooltips).
          </p>
          <p>
            AdapTable also allows you to create Sparklines on numeric cell data.
            Select 'View As Sparkline' from the Column Header menu to seek a
            Sparkline for all values in the Column.
          </p>
          <p>
            Alternatively you can select a group of cells in the Column and use
            the Context Menu to see a Sparkline just for the Selected values.
          </p>
        </div>
      }
      helpResources={
        <div>
          <a
            href="https://docs.adaptabletools.com/docs/plugins/chart/sparkline-column-module"
            target="_blank"
          >
            Sparkline Column Module
          </a>{' '}
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/plugins/chart/sparkline-column-module#sparkline-column-config"
            target="_blank"
          >
            Sparkline Column Predefined Config
          </a>{' '}
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/plugins/chart/sparkline-column-function#sparkline-column-api-methods"
            target="_blank"
          >
            Sparkline Column API
          </a>
        </div>
      }
    />
  );
};
