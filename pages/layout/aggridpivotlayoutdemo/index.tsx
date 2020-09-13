import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/layout/aggridpivotlayoutdemo')}
      pageTitle={'Pivot Layout Demo'}
      description={
        <div>
          <p>
            AdapTable allows you to specify - and save - pivoting information in
            your Layout. This will subsequently be available each time you
            select that Layout.
          </p>
          <p>
            In this demo we have created a <i>Pivot View</i> Layout that has the
            following properties set:
          </p>
          <ul>
            <li>
              Group on 'Employee' - through the <b>RowGroupedColumns</b>{' '}
              property.
            </li>
            <li>
              Select 'ShipVia' and 'ShipCountry' as the <b>PivotColumns</b> -
              which appear across the top.
            </li>
            <li>
              Set Aggregations (both of 'sum) on the 'InvoicedCost' and
              'ItemCount' columns - via the <b>AggregationColumns</b> property.
            </li>
            <li>
              Set the <b>EnablePivot</b> property to true - which will turn on
              pivoting.
            </li>
          </ul>
          <p>
            Note also that we created a{' '}
            <a href="./../gridmanagement/aggridcustomsortdemo">Custom Sort</a>{' '}
            for the <i>Ship Via</i> column so that 'Sppedy Express' is the firt
            value and that the pivot obeys this.
          </p>
          <p>
            Finally, we set a{' '}
            <a href="./../style/aggridformatcolumndemo">Format Column</a> for
            the 'InvoicedCost' column of 3 decimal places so that the
            aggregations will roll up nicely.
          </p>
        </div>
      }
      helpResources={
        <div>
          <a
            href="https://api.adaptabletools.com/interfaces/_src_predefinedconfig_layoutstate_.layoutstate.html"
            target="_blank"
          >
            Layout Config
          </a>{' '}
          |{' '}
          <a
            href="https://api.adaptabletools.com/interfaces/_src_api_layoutapi_.layoutapi.html"
            target="_blank"
          >
            Layout Api
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
            Layout Read Me
          </a>{' '}
        </div>
      }
    />
  );
};
