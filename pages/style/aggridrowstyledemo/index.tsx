import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/style/aggridrowstyledemo')}
      pageTitle={'Row Style Demo'}
      description={
        <div>
          <h4>Row Style Demo</h4>
          <p>
            By default ag-Grid will display according to the{' '}
            <a
              href="https://www.ag-grid.com/javascript-grid-themes-provided/"
              target="_blank"
            >
              provided theme
            </a>{' '}
            you use (e.g. Balham, Blue, Blue etc.)
          </p>
          <p>
            However you are able to style the rows in the ag-Grid using the
            RowStyles property of{' '}
            <a
              href="https://api.adaptabletools.com/interfaces/_predefinedconfig_userinterfacestate_.userinterfacestate.html"
              target="_blank"
            >
              User Interface State
            </a>
            .
          </p>
          <p>
            The <i>RowStyles</i> array can take up to 3 properties: 'All' (which
            is used for all rows and will ignore other properties), 'Even' or
            'Odd'; for the last 2 properties you can supply either, both or
            none.
          </p>
          <p>
            In this example we have set an Even Row style (using a classname
            property - we need to make sure that we provide a css style of that
            name) and an Odd Row Style that uses the{' '}
            <a href="" target="_blank">
              IStyle
            </a>
            object that we populate.
          </p>
        </div>
      }
    />
  );
};
