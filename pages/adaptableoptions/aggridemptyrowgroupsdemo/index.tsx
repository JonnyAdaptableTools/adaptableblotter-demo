import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import(
        '../../../src/client/adaptableoptions/aggridemptyrowgroupsdemo'
      )}
      pageTitle={'Empty Row Groups Demo'}
      description={
        <div>
          <p>
            Row Groups will automatically open to show the rows in the parent
            group - irrespective how levels deep the Row Groups are.
          </p>
          <p>
            But sometimes the <b>only columns</b> in the Grid are the Row Groups
            - when this happens you see a strange effect in the last group of
            empty rows with no content.{' '}
          </p>
          <p>
            To avoid this set <b>hideEmptyGroupRows</b> to <i>true</i> in{' '}
            <a
              href="https://docs.adaptabletools.com/docs/adaptable-options/general-options"
              target="_blank"
            >
              General Options
            </a>{' '}
            and the last row will not expand when clicked.
          </p>
          <p>
            In this demo we have set <i>hideEmptyGroupRows</i> to true and
            created 2 Layouts:
          </p>
          <ul>
            <li>
              <b>Many Columns</b> - has multiple columns and the last row not
              opening effect is not required
            </li>
            <li>
              <b>No Columns</b> - has no non-grouped columns so the last group
              will not open
            </li>
          </ul>{' '}
        </div>
      }
      helpResources={
        <div>
          <a
            href="https://docs.adaptabletools.com/docs/adaptable-options/general-options"
            target="_blank"
          >
            General Options
          </a>{' '}
        </div>
      }
    />
  );
};
