import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';
/*}
export function GetNumberOperatorPairs(): KeyValuePair[] {


export function GetStringOperatorPairs(): KeyValuePair[] {
  return [
    { Key: '*', Value: LeafExpressionOperator.StartsWith },
    { Key: '%', Value: LeafExpressionOperator.Contains },
    { Key: '!', Value: LeafExpressionOperator.NotContains },
    { Key: '=', Value: LeafExpressionOperator.Equals },
  ];
}



*/
export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/filter/aggridquickfilterdemo')}
      pageTitle={'Quick Filters Demo'}
      description={
        <div>
          <p>
            The Quick Filter Bar lies beneath the Column Header; if set set to
            <i>visible</i> in the underlying grid (e.g. in ag-Grid it is
            `floatingFilter: true` in GridOptions) then it will work in
            AdapTable.
          </p>
          <p>
            It essentially provides a shortcut to creating Column Filters
            manually in the filter dropdown, e.g. typing 's' in the Quick Filter
            Bar will create a Column Filter of [Column] contains 's'.
          </p>

          <p>
            There are a number of wildcards that you can use to speed up your
            search as follows:
          </p>
          <ul>
            <li>
              <b>Numeric Columns</b>: Standard wildcards (ie. &gt;, &le;, &lt;,
              &ge;, =) and a few others (e.g. ':' is <i>between</i> as in
              '5:100', or '&lt;&gt;' is <i>not equals</i>)
            </li>
            <li>
              <b>Text Columns</b>: Wildcards include '*' for <b>StartsWith</b>{' '}
              (e.g. 'f*'), '%' for <b>Contains</b> (e.g. 'd%'), '!' for{' '}
              <b>NotContains</b> (e.g. '!r') and '=' for <b>Equals</b>
            </li>
            <li>
              <b>Date Columns</b>: None at present but coming in a version soon.
            </li>
            <li>
              <b>Boolean Columns</b>: 1, 'y', 't' all equal to <b>True</b>, 0,
              'f', 'n' all equal to <b>False</b> - test it in the{' '}
              <i>Is Valid</i> Column
            </li>
          </ul>
        </div>
      }
      helpResources={
        <div>
          <a
            href="https://adaptabletools.zendesk.com/hc/en-us/articles/360029896011-Filter-FAQ"
            target="_blank"
          >
            FAQ
          </a>
          ,{' '}
          <a
            href="https://adaptabletools.zendesk.com/hc/en-us/articles/360028637912-Filtering-Videos"
            target="_blank"
          >
            Videos
          </a>
          ,{' '}
          <a
            href="https://adaptabletools.zendesk.com/hc/en-us/articles/360002755137-Search-Functions"
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
