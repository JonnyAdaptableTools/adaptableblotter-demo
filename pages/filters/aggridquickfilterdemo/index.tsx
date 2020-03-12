import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/filter/aggridquickfilterdemo')}
      pageTitle={'Quick Filters Demo'}
      description={
        <div>
          <p>
            The Quick Filter Bar lies beneath the Column Header. If its set to
            visible in the underlying grid (e.g. in ag-Grid it is
            'floatingFilter: true' in GridOptions) then it will work in
            AdapTable.
          </p>
          <p>
            It essentially provides a shortcut to creating Column Filters (which
            you do in the filter dropdown), e.g. typing 's' in the Quick Filter
            Bar will create a Column Filter of [Column] contains 's'.
          </p>
          <p>
            There are a number of wildcards that you can use to speed up your
            search as follows: (e.g > 15, 's*', '1:10' [between 1 and 10]){' '}
          </p>
          <ul>
            <li>
              <b>Numeric Columns</b>
            </li>
            <li>blah</li>
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
