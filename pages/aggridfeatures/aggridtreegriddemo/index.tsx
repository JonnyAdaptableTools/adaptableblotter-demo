import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/aggridfeatures/aggridtreegriddemo')}
      pageTitle={'Tree Data Demo'}
      description={
        <div>
          <p>
            Tree Data is typically used when the data to be displayed is
            'hierarchical' e.g. a Company Organisation chart or a list Folder /
            File contents.{' '}
          </p>
          <p>
            Unlike Master / Detail views (where you typically have a different
            grid when you expand to see children), Tree Data views show the same
            set of columns when a row is expanded.
          </p>
          <p>
            Tree Data differs to normal Row Grouping because the top row in each
            'Group' is a 'real' record and not merely aggregated data (though it
            can show agg data as in the 'Staff' and 'Budget' cols here.)
          </p>
          <p>
            AdapTable works normally when using Tree Data as this example
            demonstrates - it lists the UK Government Cabinet - each 'top row'
            is the Cabinet member and expanded rows are Ministers.{' '}
          </p>
          <p>
            We have (completely randomly) added fictitous 'Staff' and 'Budget'
            cols. These both tick more than 1,000 times a second - purely for
            demo purposes.
          </p>
          <p>
            See more about Tree Data:{' '}
            <a
              href="https://www.ag-grid.com/javascript-grid-tree-data/"
              target="_blank"
            >
              here
            </a>{' '}
            including some of the restrictions it includes (e.g. no row grouping
            or pivoting is possible).
          </p>
        </div>
      }
    />
  );
};
