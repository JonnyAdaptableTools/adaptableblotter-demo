import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/queries/aggriduserqueryfunctionsdemo')}
      pageTitle={'User Query Functions Demo'}
      description={
        <div>
          <p>
            The AdapTable parser ships with a{' '}
            <a
              href="https://docs.adaptabletools.com/docs/common-objects/common-objects-query/#appendix--expression-functions"
              target="_blank"
            >
              very large number
            </a>{' '}
            of Expression Functions that can be used in a query.
          </p>
          <p>
            Users can add to this at run-time by providing{' '}
            <a
              href="https://docs.adaptabletools.com/docs/common-objects/common-objects-query/#custom-expression-functions"
              target="_blank"
            >
              custom expresion functions
            </a>{' '}
            which AdapTable will invoke the query is being evaluated.
          </p>
          <p>
            The main element to be provided is a <b>handler</b> property that
            wraps the actual JavaScript function.
          </p>
          <p>
            Additionally <i>description</i>, <i>signature</i> and{' '}
            <i>examples</i> properties can be provided which are displayed in
            the Expression Editor to help the run-time user.
          </p>
          <p>
            Note the important <b>isPredicate</b> property; if set to{' '}
            <i>true</i>, the Expression Function can be used as the main part of
            a Query (which can only return booleans).
          </p>
          <p>In this Demo we provide 2 custom Expression Functions:</p>
          <ul>
            <li>
              <p>
                <b>IN_BUSINESS_YEAR</b> - a <b>Predicate</b> user function which
                checks whether or not a given date is in the Current Business
                Year.
              </p>
              <p>
                Here we use it inside the{' '}
                <a href="./aggridcurrentquerydemo" target="_blank">
                  Query
                </a>{' '}
                we are running: ('IN_BUSINESS_YEAR([OrderDate]) AND
                IN_BUSINESS_YEAR([ShippedDate])').
              </p>
              <p>
                The query returns only rows where both the Order and Shipped
                Dates are in the current business year.
              </p>
            </li>
            <li>
              <p>
                <b>GBP_PRICE</b> - a <b>Non Predicate</b> user function which
                returns the GBP conversion for a USD currency value.
              </p>
              <p>
                (The function uses a mock service and also passes in the
                Shipping Details (which we get from the{' '}
                <a
                  href="https://docs.adaptabletools.com/api/expressioncontext"
                  target="_blank"
                >
                  Context
                </a>{' '}
                in the handler) in order to arrive at the fictitious price.)
              </p>
              <p>
                The user function is used to create 2{' '}
                <a
                  href="../../column/aggridcalculatedcolumndemo"
                  target="_blank"
                >
                  Calculated Columns
                </a>{' '}
                :<i>OrderCostGBP</i>, <i>PackageCostGBP</i>.
              </p>
              <p>
                Each Calculated Column contains an Expression which is passed
                the equivalent USD column as the sole input.
              </p>
              <p>
                Note also that we create a{' '}
                <a href="../../style/aggridformatcolumndemo" target="_blank">
                  Format Column
                </a>{' '}
                with the Scope of the 2 columns that adds a '£' and formats the
                digits.
              </p>
            </li>
          </ul>
        </div>
      }
      helpResources={
        <div>
          <a
            href="https://docs.adaptabletools.com/docs/common-objects/common-objects-query"
            target="_blank"
          >
            Adaptable Expression
          </a>{' '}
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/adaptable-modules/query-module"
            target="_blank"
          >
            Query Module
          </a>{' '}
        </div>
      }
    />
  );
};
