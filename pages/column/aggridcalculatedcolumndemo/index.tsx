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
            A Calculated Column contains a{' '}
            <a
              href="https://docs.adaptabletools.com/docs/adaptable-parser/query#scalar-expressions"
              target="_blank"
            >
              Scalar Expression
            </a>
            , meaning that it can return any single value, and it{' '}
            <b>will update automatically</b> as other values change.
          </p>
          <p>In this example we have created 6 Calculated Columns: </p>
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
              <b>ShipDelay</b> - (a boolean) which returns true if{' '}
              <i>ShippedDate</i> is 4 days later than the
              <i>OrderDate</i> (we add it to <b>CheckboxColumns</b> in Format
              Column Module for better visualisation).
            </li>
            <li>
              <b>Tax</b> - (a number) which returns the VAT (calculated at 20%)
              on <i>Profit</i> (which is <b>also a Calculated Column!</b>) and
              to which we've added a{' '}
              <a href="../style/aggridformatcolumndemo">Display Format</a>{' '}
            </li>
          </ul>{' '}
          <p>
            Click the 1st button in Dasbhoard to see details of the Expression -
            or 'Edit Expression' in the Column Header menu.{' '}
          </p>
          <p>
            Calculated Columns are treated as 'normal' columns and can be
            referenced in other AdapTable objects. In this demo these Calculated
            Columns are referenced elsewhere:
            <ul>
              <li>
                <b>Comment</b> in the <i>grouped calc cols</i>layout
              </li>
              <li>
                <b>Profit</b> in 2 Conditional Styles which use Predicates (
                <i>Positive</i> and <i>Negative</i>){' '}
              </li>
              <li>
                <b>High Cost</b> in a Row-based Conditional Style that uses an
                Expression
              </li>
            </ul>
          </p>
          <p>
            so we included them in the layouts we created (and we grouped on
            'Comment') and we also styled them (e.g. 'Profit') using Conditional
            Styles.{' '}
          </p>
        </div>
      }
      helpResources={
        <div>
          <a
            href="https://docs.adaptabletools.com/docs/adaptable-modules/calculated-column-module"
            target="_blank"
          >
            Calculated Column Module
          </a>{' '}
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/adaptable-parser/query"
            target="_blank"
          >
            Adaptable Expression
          </a>{' '}
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/predefined-config/calculated-column-config"
            target="_blank"
          >
            Calculated Column Config
          </a>{' '}
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/adaptable-api/calculated-column-api"
            target="_blank"
          >
            Calculated Column Api
          </a>{' '}
          |{' '}
          <a href="https://youtu.be/mk_KpFLzV-c" target="_blank">
            Calculated Column Video
          </a>{' '}
        </div>
      }
    />
  );
};
