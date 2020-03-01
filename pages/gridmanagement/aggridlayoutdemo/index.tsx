import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/grid/aggridlayoutdemo')}
      pageTitle={'Layout (Views) Demo'}
      description={
        <div>
          <p>
            Use Layouts to manage sets of column visibility and order. Layouts
            can also include column sorting, grouping and pivoting information
            and can save automatially when changed
          </p>
          <p>
            The search and filter functions determine <b>row</b> visibility and
            order, while layouts manage <b>column</b> visibility and order. .
          </p>
          <p>This example contains 5 layouts: </p>
          <ol>
            <li>
              {' '}
              <b>Simple Layout</b>: a basic layout but which includes a
              Calculated Column (<i>Avg Item Cost</i>) and a FreeText Column (
              <i>Comments</i>){' '}
            </li>
            <li>
              {' '}
              <b>Sorting Layout</b>: a layout which contains 2 sorted columns,
              one of which has a Custom Sort (<i>ShipVia</i>)
            </li>
            <li>
              {' '}
              <b>Grouping Layout</b>: which groups on the <i>Employee</i> and{' '}
              <i>Ship Country</i> columns
            </li>
            <li>
              {' '}
              <b>Pivoting Layout</b> which defines the following pivoting
              definition:
              <ul>
                <li>
                  Pivot on the <i>ShipVia</i> column (the <b>PivotColumns</b>{' '}
                  property) - note that we automatically uses the Custom Sort
                  defined for that this column.
                </li>
                <li>
                  Group on the <i>Employee</i> column (the <b>GroupedColumns</b>{' '}
                  property)
                </li>
                <li>
                  Show aggregation totals for the <i>InvoicedCost</i> (sum) and{' '}
                  <i>ItemCost</i> (avg) columns (the <b>AggregationColumns</b>{' '}
                  property)
                </li>
              </ul>
            </li>

            <li>
              {' '}
              <b>Advanced Layout</b>: bit of everything
            </li>
          </ol>{' '}
        </div>
      }
      helpResources={
        <div>
          <a
            href="https://api.adaptabletools.com/interfaces/_predefinedconfig_layoutstate_.layoutstate.html"
            target="_blank"
          >
            Predefined Config
          </a>
          ,{' '}
          <a
            href="https://api.adaptabletools.com/interfaces/_api_layoutapi_.layoutapi.html"
            target="_blank"
          >
            Adaptable API
          </a>
          ,{' '}
          <a
            href="https://adaptabletools.zendesk.com/hc/en-us/articles/360002170317-Layouts-FAQ"
            target="_blank"
          >
            FAQ
          </a>
          ,{' '}
          <a
            href=" https://adaptabletools.zendesk.com/hc/en-us/articles/360029743312-Layout-Videos"
            target="_blank"
          >
            Videos
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
