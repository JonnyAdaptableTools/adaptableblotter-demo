import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import(
        '../../../src/client/conditionalstyle/aggridconditionalstyleadvancedruledemo'
      )}
      pageTitle={'Conditional Style Advanced Rule Demo'}
      description={
        <div>
          <p>
            For more complicated Conditional Styles there is the option to use a{' '}
            <a
              href="https://v9-0--docs-adaptabletools.netlify.app/docs/common-objects/common-objects-query"
              target="_blank"
            >
              Query
            </a>{' '}
            when creating the Conditional Style Rule.
          </p>
          <p>
            This will enable evaluation across multiple columns using more
            advanced criteria.
          </p>
          <p>
            When the rule is met the column / row will be styled according to
            the style properties provided.
          </p>
          <p>
            This example has 2 Conditional Styles that provide a Query (and have
            a Scope of 'All: true'):
            <ul>
              <li>
                Whole row is gray where 'InvoicedCost' column value is over 1000
              </li>
              <li>
                Whole row is yellow where 'Employee' column value is either
                "Michael Suyama" or "Janet Leverling"{' '}
              </li>
            </ul>
          </p>
        </div>
      }
      helpResources={
        <div>
          <a
            href="https://docs.adaptabletools.com/docs/adaptable-modules/conditional-style-module"
            target="_blank"
          >
            Conditional Style Module
          </a>{' '}
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/predefined-config/conditional-style-config"
            target="_blank"
          >
            Conditional Style Predefined Config
          </a>{' '}
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/adaptable-api/conditional-style-api"
            target="_blank"
          >
            Conditional Style API
          </a>{' '}
          |{' '}
          <a
            href="https://v9-0--docs-adaptabletools.netlify.app/docs/common-objects/common-objects-query"
            target="_blank"
          >
            Expression
          </a>{' '}
        </div>
      }
    />
  );
};
