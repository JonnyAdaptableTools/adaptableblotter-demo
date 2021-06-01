import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import(
        '../../../src/client/formatcolumn/aggridformatcolumnformatdemo'
      )}
      pageTitle={'Format Column Formatter Demo'}
      description={
        <div>
          <p>
            The Format Column Module allows you to style an entire column by
            proviing a visual Style or a Display Format (or both).
          </p>
          <p>
            This demo shows how to provide a <b>Display Format</b> - while the
            Formatter demo demonstrates how to apply a Visual Style.
          </p>
          <p>
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

          <p>This example has many Format Columns with formatters: </p>
          <ul>
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
          </ul>
        </div>
      }
      helpResources={
        <div>
          <a
            href="https://docs.adaptabletools.com/docs/adaptable-modules/format-column-module"
            target="_blank"
          >
            Format Column Module
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
