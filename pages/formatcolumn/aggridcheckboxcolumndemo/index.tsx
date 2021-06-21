import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/formatcolumn/aggridcheckboxcolumndemo')}
      pageTitle={'Checkbox Column Demo'}
      description={
        <div>
          <p>
            Checkbox columns are boolean columns which will show a Checkbox in
            each cell (instead of true / false).
          </p>
          <p>If the cell is editable then the checkbox is also. </p>
          <p>
            When the checkbox in a Checkbox column is clicked, the{' '}
            <a
              href="https://docs.adaptabletools.com/docs/adaptable-events/checkbox-column-clicked-event"
              target="_blank"
            >
              CheckboxColumnClicked Event
            </a>{' '}
            is fired providing details of the cell that was changed.
          </p>
          <p>
            In this demo the <b>IsValid</b> column has been set to be a Checkbox
            Column and we output some of the Event info below.
          </p>
          <div id="outputDiv" />{' '}
        </div>
      }
      helpResources={
        <div>
          <a
            href="https://docs.adaptabletools.com/docs/adaptable-modules/format-column-module"
            target="_blank"
          >
            Format Column Module
          </a>{' '}
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/adaptable-events/checkbox-column-clicked-event"
            target="_blank"
          >
            CheckboxColumnClicked Event
          </a>{' '}
        </div>
      }
    />
  );
};
