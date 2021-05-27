import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import(
        '../../../src/client/formatcolumn/aggridformatcolumnstyledemo'
      )}
      pageTitle={'Format Column Demo'}
      description={
        <div>
          <p>
            The Format Column Function allows you to style an entire column.
            Unlike Conditional Styles, the Format Column style is <b>always</b>{' '}
            applied, irrespective of the data in the cell.{' '}
          </p>
          <p>
            Format Columns use <b>Scope</b> meaning you can choose to apply a
            Format to one, some or all columns, or to columns of a particular
            DataType.
          </p>
          <p>
            You can provide either a visual Style, a Display Format (or both).
          </p>
          <p>
            <b>Display Format</b>
            <br />
            Display Formats enable you to provide a display value for a columns
            that fits your requirements without it changing the underlying cell
            value. They work on:
          </p>
          <ul>
            <li>
              <b>Date Columns: </b>use a preset value or provide your own Date
              or Time format (which matches the{' '}
              <a
                href="https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table"
                target="_blank"
              >
                available patterns
              </a>
              ).
            </li>
            <li>
              <b>Numeric Columns: </b> set values for Prefix, Suffix, Fraction
              Separator, Integer Separator, Fraction Digits, Integer Digits,
              Multiplier and Negative Parentheses etc.
            </li>
            <li>
              <b>String Columns: </b> set text to show in Upper or Lower case or
              be trimmed
            </li>
          </ul>
          <p>
            <b>Visual Style</b>
            <br />
            Format Columns use the same Style builder as Quick Search and
            Conditional Styles, which allows you to name key elements of the
            style.
          </p>{' '}
          <p>
            Alternatively you can specify a css style name in Format Colunn
            Predefined Config (which you must provide in your css).
          </p>
          <p>
            <b>Header Name</b>
            <br />
            Format Column allows you to change the Header / Caption of any
            column so that it better fits your requirements.
          </p>
          <p>This example has 8 Format Columns: </p>
          <ul>
            <li>
              <b>Order Id</b> has Visual Style of lime green with a red fore
              colour
            </li>
            <li>
              <b>LastUpdatedTime</b> has a Display Format with pattern of
              'HH:mm:ss' to show just time
            </li>
            <li>
              <b>Order Date</b> has a Visual Style of bold and italicised and
              with a smaller font and a Display Format with pattern of
              'yyyyMMdd'
            </li>
            <li>
              <b>ChangeLastOrder</b> has a Display Format to show negative
              numbers in parantheses and Cell Alignment of centre.
            </li>
            <li>
              <b>InvoicedCost</b> has a Display Format to show '£' sign and 2
              decimal places
            </li>
            <li>
              <b>OrderCost</b> has a Display Format to separate integer
              thousands with a space, a '$' prefix and '(AUD)' suffix
            </li>
            <li>
              <b>ShipCountry</b> has a Display Format to show text in Upper Case
            </li>
            <li>
              <b>Required Date</b> has been changed to have a HeaderName of
              'Reqd Dt'
            </li>
          </ul>
        </div>
      }
      helpResources={
        <div>
          <a
            href="https://docs.adaptabletools.com/docs/adaptable-functions/format-column-function"
            target="_blank"
          >
            Format Column Function
          </a>{' '}
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/predefined-config/format-column-config"
            target="_blank"
          >
            Format Column Predefined Config
          </a>{' '}
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/adaptable-api/format-column-api"
            target="_blank"
          >
            Format Column API
          </a>
          |{' '}
          <a href="https://youtu.be/tYTGQ1ufhbc" target="_blank">
            Format Column Video
          </a>
        </div>
      }
    />
  );
};
