import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/grid/aggridcolumnchooserdemo')}
      pageTitle={'Column Chooser Demo'}
      description={
        <div>
          <p>
            The Column Chooser function provides a Popup that enables you easily
            to order columns and also show and hide them.{' '}
          </p>
          <p>
            If a Layout is being used, then any changes made to the column order
            will become part of the Layout (and will 'AutoSave' if that option
            has been set to true).{' '}
          </p>
          <p>
            Note: Column Chooser is designed for managing{' '}
            <b>column visiblity</b>. To control <b>row visibility</b>, use one
            of the many Search Functions instead.
          </p>

          <p>
            You can open the Column Chooser through the button in the Dashboard
            (it has 3 vertical lines) or via Column and Context Menu options .
          </p>
        </div>
      }
      helpResources={
        <div>
          <a
            href="https://github.com/AdaptableTools/adaptable/blob/master/packages/adaptable/readme/Functions/column_chooser_function.md"
            target="_blank"
          >
            Read Me
          </a>{' '}
          |{' '}
          <a
            href="https://api.adaptabletools.com/interfaces/_src_api_columnchooserapi_.columnchooserapi.html"
            target="_blank"
          >
            Adaptable API
          </a>
          .
        </div>
      }
    />
  );
};
