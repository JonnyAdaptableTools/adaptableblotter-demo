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
            But we're often asked if AdapTable works as well with big data sets
            and the answer is yes.{' '}
          </p>
          <p>
            This demo contains 100,000 rows of <b>random meaningless data</b>{' '}
            which ticks many thousands of times a second using batch updates
            (also updating, as a result, the Change column and its Percent Bar).
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
              href="https://api.adaptabletools.com/interfaces/_adaptableoptions_searchoptions_.searchoptions.html#serversearchoption"
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
