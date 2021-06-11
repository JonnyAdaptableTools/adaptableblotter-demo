import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/queries/aggridqueryoptionsdemo')}
      pageTitle={'Query Options Demo'}
      description={
        <div>
          <p>
            By default every Expression function in the Adaptable Parser and
            every column provided to AdapTable are available to use in a Query.
          </p>
          <p>
            However sometimes users want to <b>limit</b> either the Expression
            Functions available (of which there are{' '}
            <a
              href="https://docs.adaptabletools.com/docs/common-objects/common-objects-query/#appendix--expression-functions"
              target="_blank"
            >
              very many
            </a>
            ) or the columns which can be used in a query.
          </p>
          <p>
            This is particularly the case if the Query is being run remotely on
            the server (typically via{' '}
            <a
              href="https://docs.adaptabletools.com/docs/key-topics/server-functionality#server-searching-and-filtering"
              target="_blank"
            >
              Server Searching
            </a>
            ) and not by AdapTable.
          </p>
          <p>Both of these can be accomplished in AdapTable:</p>
          <ul>
            <li>
              <p>
                <b>Expression Functions</b>
              </p>
              <p>
                The <b>expressionFunctions</b> option in{' '}
                <a
                  href="https://docs.adaptabletools.com/docs/adaptable-options/search-options"
                  target="_blank"
                >
                  Search Options
                </a>{' '}
                allows a precise set of Expression Functions to be provided to
                AdapTable (or a list of those to omit).
              </p>
              <p>
                Only these Expression Functions will be displayed in the
                Expression Editor UI and only these will be valid when the
                Parser evaluates the Expression.
              </p>
              <p>
                Note for Devs: You need to import{' '}
                <i>AdaptableExpressionFunctions</i> from the same place you
                import <i>Adaptable</i> as seen in the code below.
              </p>
              <p>
                In this example we have used omit (from Lodash) to remove the
                'COALESCE', 'DIFF_YEARS' and 'IS_BLANK' functions.
              </p>
            </li>
            <li>
              <p>
                <b>Queryable Columns</b>
              </p>
              <p>
                The <b>QueryableColumns</b> property in Query State can be
                supplied with a list of Columns - only these can be used in a
                Query.
              </p>
              <p>
                Note: The default is set all Columns as Queryable so only
                provide a value here if you explicitly require to limit this.
              </p>
              <p>
                In this example we have configured that only 4 columns -
                'ShipCountry', 'ShipVia', 'Employee' and 'ItemCount' - can be
                used in a Query.
              </p>
            </li>
          </ul>
        </div>
      }
      helpResources={
        <div>
          <a
            href="https://docs.adaptabletools.com/docs/adaptable-modules/query-module"
            target="_blank"
          >
            Query Module
          </a>{' '}
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/common-objects/common-objects-query"
            target="_blank"
          >
            Adaptable Expression
          </a>{' '}
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/predefined-config/query-config"
            target="_blank"
          >
            Query Config
          </a>{' '}
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/adaptable-options/search-options"
            target="_blank"
          >
            Search Options
          </a>{' '}
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/adaptable-api/query-api"
            target="_blank"
          >
            Query Api
          </a>{' '}
        </div>
      }
    />
  );
};
