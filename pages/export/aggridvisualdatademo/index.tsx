import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/export/aggridvisualdatademo')}
      pageTitle={'Visual Data Report Demo'}
      description={
        <div>
          <p>
            <b>Visual Data</b> is one of the System Reports provided by
            AdapTable.{' '}
          </p>
          <p>
            Unlike other reports which are designed to export data, Visual is a
            WYSIWYG (What You See Is What You Get) report.{' '}
          </p>
          <p>
            The report exports all the data curretnly in the Grid - including
            any Grouping, Cell Styles and other formats.
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
        </div>
      }
    />
  );
};
