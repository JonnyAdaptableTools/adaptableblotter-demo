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
            The Rule is based on a 'Predicate' - only the Predicates associated
            with the selected scope are available.
          </p>
          <p>
            For more complicated rules there is the option, instead, to use a
            Query which will enable evaluation across multiple columns using
            more advanced criteria.
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
                {' '}
                All colunns of DataType: Number have a red font when they are
                negative (using the 'Negative' predicate)
              </li>
              <li>
                'Item Cost' column is italicised with a yellow background where
                it is greater than 60 (using the 'GreaterThan' predicate)
              </li>
              <li>
                Whole row is lightblue where 'InvoicedCost' column value is over
                1000 (this uses an Expression rather than a Predicate)
              </li>
              <li>
                Employee Column is bold where the value is Stephen or Laura
                (this uses the 'new_starter' <b>custom predicate</b> defined in
                the <i>customPredicateDefs</i> section of Adaptable Options.
              </li>
            </ul>
          </p>
        </div>
      }
      helpResources={
        <div>
          <a
            href="https://api.adaptabletools.com/interfaces/_src_predefinedconfig_conditionalstylestate_.conditionalstylestate.html"
            target="_blank"
          >
            Predefined Config
          </a>{' '}
          |{' '}
          <a
            href="https://api.adaptabletools.com/interfaces/_src_api_conditionalstyleapi_.conditionalstyleapi.html"
            target="_blank"
          >
            Adaptable API
          </a>
        </div>
      }
    />
  );
};
