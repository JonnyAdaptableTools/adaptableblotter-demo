import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/layout/aggridadvancedlayoutdemo')}
      pageTitle={'Advanced Layout Demo'}
      description={
        <div>
          <p>This example contains 5 layouts of different kinds: </p>
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
            href="https://api.adaptabletools.com/interfaces/_src_predefinedconfig_layoutstate_.layoutstate.html"
            target="_blank"
          >
            Predefined Config
          </a>{' '}
          |{' '}
          <a
            href="https://api.adaptabletools.com/interfaces/_src_api_layoutapi_.layoutapi.html"
            target="_blank"
          >
            Adaptable API
          </a>{' '}
          |{' '}
          <a
            href="https://api.adaptabletools.com/interfaces/_src_adaptableoptions_layoutoptions_.layoutoptions.html"
            target="_blank"
          >
            Layout Options
          </a>{' '}
          |{' '}
          <a
            href="https://github.com/AdaptableTools/adaptable/blob/master/packages/adaptable/readme/functions/layout-function.md"
            target="_blank"
          >
            Read Me
          </a>{' '}
        </div>
      }
    />
  );
};
