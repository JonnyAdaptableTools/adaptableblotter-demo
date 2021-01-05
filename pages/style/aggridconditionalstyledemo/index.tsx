import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/style/aggridconditionalstyledemo')}
      pageTitle={'Conditional Style Demo'}
      description={
        <div>
          <p>
            Conditional Styles allow you to create rules that decide how columns
            and rows are styled.{' '}
          </p>
          <p>
            The 'Scope' of the style determines where it can be applied: ie.
            whole row, one or more columns, or one or more column data types.
          </p>
          <p>
            The Rule is based on a{' '}
            <a
              href="https://docs.adaptabletools.com/docs/common-objects/common-objects-predicate"
              target="_blank"
            >
              Predicate
            </a>{' '}
            - only the Predicates associated with the selected scope are
            available.
          </p>
          <p>
            For more complicated rules there is the option, instead, to use an{' '}
            <a
              href="https://docs.adaptabletools.com/docs/common-objects/common-objects-expression"
              target="_blank"
            >
              Expression
            </a>{' '}
            which will enable evaluation across multiple columns using more
            advanced criteria.
          </p>
          <p>
            When the rule is met the column / row will be styled according to
            the style properties provided. Alternatively you can specify a css
            style name (which you provide).
          </p>
          <p>
            This example has 5 Conditional Styles:
            <ul>
              <li>
                All colunns of DataType: Number have a green font when they are
                positive (using the 'Positive' predicate)
              </li>
              <li>
                All colunns of DataType: Number have a red font when they are
                negative (using the 'Negative' predicate)
              </li>
              <li>
                'Item Cost' column is italicised with a yellow background where
                it is greater than 60 (using the 'GreaterThan' predicate)
              </li>
              <li>
                Whole row is gray where 'InvoicedCost' column value is over 1000
                (this uses an{' '}
                <a
                  href="https://docs.adaptabletools.com/docs/common-objects/common-objects-expression"
                  target="_blank"
                >
                  Expression
                </a>{' '}
                rather than a{' '}
                <a
                  href="https://docs.adaptabletools.com/docs/common-objects/common-objects-predicate"
                  target="_blank"
                >
                  Predicate
                </a>{' '}
                and a Scope of 'All: true')
              </li>
              <li>
                Employee Column uses the style pre-defined in the{' '}
                <b>employeeStyle</b> ClassName where the cell value is Stephen
                or Laura
                <br />
                (Note: this uses the 'new_starter' <b>custom predicate</b>{' '}
                defined in the <i>customPredicateDefs</i> section of Adaptable
                Options.)
              </li>
            </ul>
          </p>
        </div>
      }
      helpResources={
        <div>
          <a
            href="https://docs.adaptabletools.com/docs/adaptable-functions/conditional-style-function"
            target="_blank"
          >
            Conditional Style Function
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
            href="https://docs.adaptabletools.com/docs/common-objects/common-objects-predicate"
            target="_blank"
          >
            Predicate
          </a>{' '}
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/common-objects/common-objects-expression"
            target="_blank"
          >
            Expression
          </a>{' '}
        </div>
      }
    />
  );
};
