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
            and rows are styled.
          </p>
          <p>
            Rules work at either column or row level; when the rule is met the
            column / row is styled according to the style set out in the rule.
            Alternatively you can specify a css style name (which you provide).
          </p>
          <p>
            This example has 4 Conditional Styles:
            <ul>
              <li>
                The 'Change Last Order' column has 2 styles: it is green when
                positive and red when negative;
              </li>
              <li>
                Any row where the 'Item Cost' column is > 80 is italicised with
                a yellow background (note that
                <i>ExcludeGroupedRows</i> is <b>true</b> so the style is not
                applied on grouped rows.)
              </li>
              <li>
                The font is bold where the 'Package Cost' column is less than 10
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
          </a>
          ,{' '}
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
