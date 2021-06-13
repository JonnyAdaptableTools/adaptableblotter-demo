import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/export/aggridselectedcellsdemo')}
      pageTitle={'Selected Cells Report Demo'}
      description={
        <div>
          <p>
            <b>Selected Cells</b> is one of the System Reports provided by
            AdapTable.{' '}
          </p>
          <p>
            As the name implies, it exports all cells which have been selected
            in the Grid.
          </p>
          <p>
            This includes non-contiguous blocks which AdapTable will render
            according to how they appear in the Grid.
          </p>
          <p>
            (To select multiple cell ranges ensure <i>enableRangeSelection</i>{' '}
            is set to true in Grid Options).
          </p>
          <p>
            In this demo we have pre-selected 3 ranges (using the{' '}
            <i>selectCells</i> method of AdapTable's{' '}
            <a
              href="https://docs.adaptabletools.com/docs/adaptable-api/grid-api"
              target="_blank"
            >
              Grid Api
            </a>{' '}
            - run the report to see how they export.
          </p>
        </div>
      }
      helpResources={
        <div>
          <a
            href="https://docs.adaptabletools.com/docs/adaptable-modules/export-module"
            target="_blank"
          >
            Export Module
          </a>
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/adaptable-options/export-options"
            target="_blank"
          >
            Export Options
          </a>{' '}
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/predefined-config/export-config"
            target="_blank"
          >
            Export Config
          </a>{' '}
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/adaptable-api/export-api"
            target="_blank"
          >
            Export Api
          </a>
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/adaptable-api/grid-api"
            target="_blank"
          >
            Grid Api
          </a>
        </div>
      }
    />
  );
};
