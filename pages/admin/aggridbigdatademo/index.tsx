import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/admin/aggridbigdatademo')}
      pageTitle={'Big Data Demo'}
      description={
        <div>
          <h4>Big Data</h4>
          <p>
            Most of the demos on this site use a version of the Northwind Orders
            demo that has 800 rows. This is done deliberately to show that the
            Adaptable Blotter works with any data set.
          </p>
          <p>
            But we're often asked if Adaptable works as well with big data sets
            and the answer is yes.{' '}
          </p>
          <p>
            This demo contains 100,000 rows of <b>random meaningless data</b>{' '}
            which ticks many thousands of times a second (also updating the
            Percent Bar in Change column).
          </p>
          <p>
            The ag-Grid Status Bar at the bottom of the grid will display the
            total (and filtered) number of rows. Create filters, searches, and
            styles, and you will see that even with a very large dataset
            everything still works.
          </p>
          <p>
            <b>Note:</b> If you have a DataSet with many hundreds of thousands
            of rows then you will probably want to use{' '}
            <a
              href="https://adaptabletools.zendesk.com/hc/en-us/articles/360002754897-Server-Searching"
              target="_blank"
            >
              Server Searching
            </a>
            .
          </p>
        </div>
      }
    />
  );
};
