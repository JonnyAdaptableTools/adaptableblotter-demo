import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/layout/aggridcolumnwidthslayoutdemo')}
      pageTitle={'Column Widths Layout Demo'}
      description={
        <div>
          <p>
            AdapTable Layouts include Column Width information to eanble precise
            control of the widths of columns and for that to be available when
            the Layoyut next loads.{' '}
          </p>
          <p>
            Column Widths can be provided at design-time (in Predefined Config)
            or managed (and persisted) automatically by AdapTable at run-time.
          </p>
          <p>
            This is provided through the <b>ColumnWidthMap</b> property which
            takes a simple map of Column Name and Width.
          </p>
          <p>
            In this example we have set widths for the <i>OrderId</i> column (of
            200) and the <i>ContactName</i> column (of 300).
          </p>
        </div>
      }
      helpResources={
        <div>
          <a
            href="https://docs.adaptabletools.com/docs/adaptable-functions/layout-function"
            target="_blank"
          >
            Layout Read Me
          </a>{' '}
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/predefined-config/layout-config"
            target="_blank"
          >
            Layout Predefined Config
          </a>{' '}
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/adaptable-options/layout-options"
            target="_blank"
          >
            Layout Options
          </a>{' '}
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/adaptable-api/layout-api"
            target="_blank"
          >
            Layout Api
          </a>{' '}
        </div>
      }
    />
  );
};
