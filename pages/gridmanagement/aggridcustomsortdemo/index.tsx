import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/grid/aggridcustomsortdemo')}
      pageTitle={'Custom Sort Demo'}
      description={
        <div>
          <p>
            The Custom Sort function allows you to specify a bespoke custom sort
            order when a column is sorted (in place of the default alphabetical
            or numbered sort).
          </p>
          <p>
            This is ideal for columns where the default sort order doesnt make
            sense (e.g. a 'Ratings' or 'Tenor' column) where you will want to
            provide a standard non-alphabetical sort.
          </p>
          <p>
            It is also suitable for columns where some users might have their
            own preferred non standard sort (e.g. a 'Sector' column).
          </p>
          <p>
            You can define Custom (in your{' '}
            <a
              href="https://docs.adaptabletools.com/docs/predefined-config/custom-sort-config"
              target="_blank"
            >
              Custom Sort Predefined Config
            </a>
            ) a Custom Sort in 2 ways, both of which will be used to sort the
            column when the header is clicked:
          </p>
          <ul>
            <li>
              <b>A 'hard-coded' list of sorted values</b> - e.g. what we provide
              for the 'Contact' and 'Ship Via' columns in this demo
            </li>
            <li>
              <b>A standard comparer function</b> - that you reference in
              Config, but provide the actual implementation as a{' '}
              <a
                href="https://docs.adaptabletools.com/docs/user-functions/custom-sort-comparer-user-function"
                target="_blank"
              >
                Custom Sort Comparaer User Function
              </a>{' '}
              . The 'Employee' column in this demo has a custom sort using the
              'EmployeeLastName' function which will sort by Last Name (see the
              code below).
            </li>
          </ul>
          <p>
            Custom Sorts will also run when the Grid is in pivot mode (see Pivot
            Layout) or if you sort on the column when its grouped (see Group
            Layout).
          </p>
        </div>
      }
      helpResources={
        <div>
          <a
            href="https://docs.adaptabletools.com/docs/predefined-config/custom-sort-config"
            target="_blank"
          >
            Custom Sort Config
          </a>{' '}
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/adaptable-api/custom-sort-api"
            target="_blank"
          >
            Custom Sort Api
          </a>{' '}
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/adaptable-modules/custom-sort-module"
            target="_blank"
          >
            Custom Sort Module
          </a>{' '}
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/user-functions/custom-sort-comparer-user-function"
            target="_blank"
          >
            Custom Sort Comparaer User Function
          </a>{' '}
          .
        </div>
      }
    />
  );
};
