import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import(
        '../../../src/client/conditionalstyle/aggridconditionalstylebasicruledemo'
      )}
      pageTitle={'Conditional Style Basic Rule Demo'}
      description={
        <div>
          <p>
            Conditional Styles allow you to create rules that decide how columns
            and rows are styled.{' '}
          </p>
          <p>
            The <b>Scope</b> of the style determines where it can be applied:
            ie. whole row, one or more columns, or one or more column data
            types.
          </p>
          <p>
            The <b>Rule</b> of the Style determnines if the style should be
            applied; when the rule is met the column / row will be styled
            according to the style properties provided.
          </p>
          <p>
            Typically the Rule for the Conditional Style is based on a{' '}
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
            This example has 3 Conditional Styles that use Predicates:
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
            Conditional Style Config
          </a>{' '}
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/adaptable-api/conditional-style-api"
            target="_blank"
          >
            Conditional Style Api
          </a>{' '}
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/common-objects/common-objects-predicate"
            target="_blank"
          >
            Predicate
          </a>{' '}
        </div>
      }
    />
  );
};
