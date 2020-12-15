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
              href="https://docs.adaptabletools.com/docs/adaptable-events/action-column-clicked-event"
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
            There are 2 optional functions you can provide for an Action Column
            (both of which you reference in{' '}
            <a
              href="https://docs.adaptabletools.com/docs/predefined-config/action-column-config"
              target="_blank"
            >
              Predefined Config
            </a>{' '}
            , but provide the actual implementation in{' '}
            <a
              href="https://docs.adaptabletools.com/docs/user-functions/user-functions-overview"
              target="_blank"
            >
              UserFunctions
            </a>
            ) :
            <ul>
              <li>
                {' '}
                <b>
                  <a
                    href="https://docs.adaptabletools.com/docs/user-functions/action-column-should-render-predicate-user-function"
                    target="_blank"
                  >
                    ActionColumnShouldRenderPredicate
                  </a>{' '}
                </b>{' '}
                - this will return true or false to determine whether the button
                will be displayed.
              </li>
              <li>
                <b>
                  <a
                    href="https://docs.adaptabletools.com/docs/user-functions/action-column-render-user-function"
                    target="_blank"
                  >
                    ActionColumnRenderFunction
                  </a>{' '}
                </b>{' '}
                - allows you to create a button that matches your style and
                requirements (and provide differently styled buttons depending
                on the data in each row).
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
              href="https://docs.adaptabletools.com/docs/adaptable-api/grid-api"
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
            href="https://docs.adaptabletools.com/docs/adaptable-functions/action-column-function"
            target="_blank"
          >
            Action Column Read Me
          </a>{' '}
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/predefined-config/action-column-config"
            target="_blank"
          >
            Action Column Config
          </a>{' '}
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/adaptable-api/action-column-api"
            target="_blank"
          >
            Action Column API
          </a>
          |{' '}
          <a href="https://youtu.be/y0cDvtdmSKM" target="_blank">
            Action Column Video
          </a>
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/user-functions/user-functions-overview"
            target="_blank"
          >
            User Functions
          </a>{' '}
        </div>
      }
    />
  );
};
