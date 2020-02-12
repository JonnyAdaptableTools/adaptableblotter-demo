import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/column/aggridactioncolumnsdemo')}
      pageTitle={'Action Columns Demo'}
      description={
        <div>
          <p>
            AdapTable provides an Action Column function that allows you to
            specify (and optionally render) a button to be placed in a column.
          </p>
          <p>
            When the button is clicked an{' '}
            <a
              href="https://api.adaptabletools.com/interfaces/_api_eventapi_.eventapi.html"
              target="_blank"
            >
              On('ActionColumnClicked')
            </a>{' '}
            event fires, providing details of which column was clicked and the
            current data in its row.{' '}
          </p>
          <p>
            You can subscribe to this event and perform any additional logic or
            functionality that is required.
          </p>
          <p>
            You can, also, provide 2 optional functions when creating an Action
            Column:
            <ul>
              <li>
                {' '}
                <b>
                  <a
                    href="https://api.adaptableblotter.com/interfaces/_predefinedconfig_actioncolumnstate_.actioncolumn.html#shouldrenderpredicate"
                    target="_blank"
                  >
                    ShouldRenderPredicate
                  </a>{' '}
                </b>{' '}
                - this will return true or false to determine whether the button
                will be displayed.
              </li>
              <li>
                <b>
                  <a
                    href="https://api.adaptableblotter.com/interfaces/_predefinedconfig_actioncolumnstate_.actioncolumn.html#renderfunction"
                    target="_blank"
                  >
                    RenderFunction
                  </a>{' '}
                </b>{' '}
                - this allows you to create a button that matches your style and
                requirements - and allows you to provide differently styled
                buttons depending on the data in each row.
              </li>
            </ul>
          </p>
          <p>
            Here we created <b>Plus</b> and <b>Minus</b> Action Columns; in the
            onActionColumnClicked event handler we update the <i>Item Count</i>{' '}
            column (though we do also have a{' '}
            <a href="../../edit/aggridplusminusdemo" target="_blank">
              Plus/Minus Function
            </a>
            ).
          </p>
          <p>
            We also created a <b>Multiply</b> Action Column which updates the{' '}
            <i>Item Cost</i> column. We supplied a <i>ShouldRenderPredicate</i>{' '}
            to say the button shouldn't appear if Employee is 'Margaret
            Peacock', and a <i>RenderFunction</i> to say that we double if the
            Employee is 'Robert King' or 'Janet Leverling' and treble it
            otherwise.
          </p>
          <p>
            Lastly we created an Action column with the text <b>Delete Row</b>{' '}
            and does exactly that.
          </p>
          <p>
            Note: the delete row and all the cell updates were performed by
            using various functions in the{' '}
            <a
              href="https://api.adaptabletools.com/interfaces/_api_gridapi_.gridapi.html"
              target="_blank"
            >
              gridApi
            </a>{' '}
            section of AdaptableApi.
          </p>
        </div>
      }
      helpResources={
        <div>
          <a
            href="https://api.adaptabletools.com/interfaces/_predefinedconfig_actioncolumnstate_.actioncolumnstate.html"
            target="_blank"
          >
            Predefined Config
          </a>
          ,{' '}
          <a
            href="https://api.adaptabletools.com/interfaces/_api_actioncolumnapi_.actioncolumnapi.html"
            target="_blank"
          >
            Adaptable API
          </a>
          ,{' '}
          <a
            href="https://adaptabletools.zendesk.com/hc/en-us/articles/360002209498-Action-Column-FAQ"
            target="_blank"
          >
            FAQ
          </a>
          ,{' '}
          <a
            href="https://adaptabletools.zendesk.com/hc/en-us/articles/360002204277-Action-Column-Videos"
            target="_blank"
          >
            Videos
          </a>
          ,{' '}
          <a
            href="https://adaptabletools.zendesk.com/hc/en-us/articles/360003213038-Special-Column-Functions"
            target="_blank"
          >
            User Guide
          </a>
          .
        </div>
      }
    />
  );
};
