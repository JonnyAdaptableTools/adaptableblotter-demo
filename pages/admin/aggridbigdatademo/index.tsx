import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/admin/aggridbigdatademo')}
      pageTitle={'Big Data Demo'}
      description={
        <div>
          <p>
            Most of the demos on this site use a version of the Northwind Orders
            demo that has 800 rows. This is done deliberately to show that
            AdapTable works with any data set.
          </p>
          <p>
            But we're often asked if AdapTable works as well with very big data
            sets and the answer is yes.{' '}
          </p>
          <p>
            This demo contains 100,000 rows of <b>random meaningless data</b>{' '}
            which ticks many thousands of times a second using batch updates
            (also updating, as a result, the Change column and its Percent Bar).
          </p>
          <p>
            The Status Bar at the bottom of the grid displays the total (and
            filtered) number of rows. As you create filters, searches, and
            styles, you'll see that even with a large dataset everything still
            works quickly.
          </p>
          <p>
            <b>Note:</b> If you have a DataSet with many hundreds of thousands
            of rows then you will probably want to use{' '}
            <a
              href="https://docs.adaptabletools.com/docs/adaptable-options/search-options#serversearchoption"
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
