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
            Here we created <b>Plus</b> and <b>Minus</b> Action Columns; in the
            onActionColumnClicked event handler we update the <i>Item Count</i>{' '}
            column (though we do also have a{' '}
            <a href="../../edit/aggridplusminusdemo" target="_blank">
              Plus/Minus Module
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
            href="https://v9-0--docs-adaptabletools.netlify.app/docs/adaptable-modules/action-column-module"
            target="_blank"
          >
            Action Column Module
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
        </div>
      }
    />
  );
};
