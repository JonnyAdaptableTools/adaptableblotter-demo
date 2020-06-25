import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/column/aggridcalculatedcolumndemo')}
      pageTitle={'Calculated Column Demo'}
      description={
        <div>
          <p>
            Calculated columns are custom columns that you create (at design or
            run time) where the value is <b>not</b> in the underlying dataset
            but is <b>dynamically derived</b> from other cells in the row.
          </p>
          <p>
            You create Calculated Columns via the Expression Editor where you
            can drag and drop the Columns and functions you need, or write the
            expression by hand.{' '}
          </p>
          <p>
            Once created, a Calculated Column becomes a 'normal' column in your
            grid and will update automatically as other values change.
          </p>
          <p>In this example we have created 5 Calculated Columns: </p>
          <ul>
            <li>
              <b>Avg Item Cost</b> - (numeric) which divides <i>ItemCost</i> by{' '}
              <i>ItemCount</i>
            </li>
            <li>
              <b>Profit</b> - (numeric) which calculates <i>Invoiced Cost</i>{' '}
              minus sum of <i>Order Cost</i> and <i>Package Cost</i>
            </li>
            <li>
              <b>Comment</b> - (a string) which returns 'Low' if <i>ItemCost</i>{' '}
              is less than 50, 'Medium' if greater than 50 and 'High' if greater
              than 100.
            </li>
            <li>
              <b>Highest Cost</b> - (a number) which returns the largest of{' '}
              <i>ItemCost</i>, <i>OrderCost</i>, <i>InvoicedCost</i> and{' '}
              <i>PackageCost</i> (the latter being first multiplied by 10){' '}
            </li>
            <li>
              <b>Tax</b> - (a string) which returns the VAT (calculated at 20%)
              on <i>OrderCost</i> and to which we've added a{' '}
              <a href="../style/aggridformatcolumndemo">Display Format</a>{' '}
            </li>
          </ul>{' '}
          <p>
            Click the 2nd button in Dasbhoard to see details of the Expression -
            or 'Edit Expression' in the Column Header menu.{' '}
          </p>
          <p>
            They are treated as 'normal' columns so we included them in the
            layouts we created (and we grouped on 'Comment') and we also styled
            them (e.g. 'Profit') using Conditional Styles.{' '}
          </p>
        </div>
      }
      helpResources={
        <div>
          <a
            href="https://github.com/AdaptableTools/adaptable/blob/master/packages/adaptable/readme/functions/calculated-column-function.md"
            target="_blank"
          >
            Read Me
          </a>{' '}
          |{' '}
          <a
            href="https://api.adaptabletools.com/interfaces/_src_predefinedconfig_calculatedcolumnstate_.calculatedcolumnstate.html"
            target="_blank"
          >
            Predefined Config
          </a>{' '}
          |{' '}
          <a
            href="https://api.adaptabletools.com/interfaces/_src_api_calculatedcolumnapi_.calculatedcolumnapi.html"
            target="_blank"
          >
            Adaptable API
          </a>{' '}
        </div>
      }
    />
  );
};
