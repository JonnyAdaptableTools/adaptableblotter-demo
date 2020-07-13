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
            You can define (in your{' '}
            <a
              href="https://api.adaptabletools.com/interfaces/_src_predefinedconfig_customsortstate_.customsortstate.html"
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
              Config, but provide the actual implementation in{' '}
              <a
                href="https://api.adaptabletools.com/modules/_src_adaptableoptions_userfunctions_.html"
                target="_blank"
              >
                UserFunctions
              </a>{' '}
              . The 'Employee' column in this demo has a custom sort using the
              'EmployeeLastName' function (see the code below).
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
            href="https://api.adaptabletools.com/interfaces/_src_predefinedconfig_customsortstate_.customsortstate.html"
            target="_blank"
          >
            Custom Sort Config
          </a>{' '}
          |{' '}
          <a
            href="https://api.adaptabletools.com/interfaces/_src_api_customsortapi_.customsortapi.html"
            target="_blank"
          >
            Custom Sort Api
          </a>{' '}
          |{' '}
          <a
            href="https://github.com/AdaptableTools/adaptable/blob/master/packages/adaptable/readme/functions/custom-sort-function.md"
            target="_blank"
          >
            Custom Sort Read Me
          </a>{' '}
          |{' '}
          <a
            href="https://api.adaptabletools.com/modules/_src_adaptableoptions_userfunctions_.html"
            target="_blank"
          >
            User Functions
          </a>{' '}
          .
        </div>
      }
    />
  );
};
