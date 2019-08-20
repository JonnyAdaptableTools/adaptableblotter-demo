import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/search/aggridquickfilterdemo')}
      pageTitle={'Quick Filters Demo'}
      description={
        <div>
          <h4>Quick Filter Demo</h4>
          <p>
            The quick filter is the bar underneath the Column Header. If its set
            to visible in the underlying grid (for ag-Grid:
            gridOptions.floatingfilter) it will work in the Adaptable Blotter.
          </p>
          <p>
            The quick filter allows you quick access to Column Filters so you
            can type in 15 in the quick filter and that will be come a column
            filter of range x=15.
          </p>
          <p>
            The same wildcards (and more) that are available in Quick Search can
            be used here (e.g > 15, 's*', '1:10' [between 1 and 10]){' '}
          </p>
          <p>
            <b>Adaptable Blotter Help Resources:</b>{' '}
            <a
              href="https://adaptabletools.zendesk.com/hc/en-us/articles/360016818012-Quick-Filter"
              target="_blank"
            >
              User Guide
            </a>{' '}
            -{' '}
            <a
              href="https://adaptabletools.zendesk.com/hc/en-us/articles/360029896011-Filter-FAQ"
              target="_blank"
            >
              FAQ
            </a>{' '}
            -{' '}
            <a
              href="https://adaptabletools.zendesk.com/hc/en-us/articles/360028637912-Filtering-Videos"
              target="_blank"
            >
              Videos
            </a>
            .
          </p>
        </div>
      }
    />
  );
};
