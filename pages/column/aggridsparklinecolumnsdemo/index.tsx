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
            href="https://api.adaptabletools.com/interfaces/_src_predefinedconfig_sparklinecolumnstate_.sparklinecolumnstate.html"
            target="_blank"
          >
            Predefined Config
          </a>
          ,{' '}
          <a
            href="https://api.adaptabletools.com/interfaces/_src_api_sparklinecolumnapi_.sparklinecolumnapi.html"
            target="_blank"
          >
            Adaptable API
          </a>
          ,{' '}
          <a
            href="https://adaptabletools.zendesk.com/hc/en-us/articles/360002449478-Sparkline-Column-FAQ"
            target="_blank"
          >
            FAQ
          </a>
          ,{' '}
          <a
            href="https://adaptabletools.zendesk.com/hc/en-us/articles/360002449498-Sparkline-Column-Videos"
            target="_blank"
          >
            Videos
          </a>
          ,{' '}
          <a
            href="https://adaptabletools.zendesk.com/hc/en-us/articles/360003213038-Special-Column-Functions"
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
