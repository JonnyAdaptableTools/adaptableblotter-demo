import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/layout/aggridpinnedcolumslayoutdemo')}
      pageTitle={'Pinned Columns Layout Demo'}
      description={
        <div>
          <p>
            AdapTable Layouts provide support for Pinning in both the
            design-time Layout definition, and in run-time persistence.
          </p>
          <p>
            This is provided through the <b>PinnedColumnsMap</b> property which
            takes a simple map of Column Name and Direction (either 'right' or
            'left').
          </p>
          <p>
            In this example we have set Pinning for the <i>OrderId</i> column
            (to the 'left') and the <i>ContactName</i> column (to the 'right').
          </p>
        </div>
      }
      helpResources={
        <div>
          <a
            href="https://api.adaptabletools.com/interfaces/_src_predefinedconfig_layoutstate_.layoutstate.html"
            target="_blank"
          >
            Layout Predefined Config
          </a>{' '}
          |{' '}
          <a
            href="https://api.adaptabletools.com/interfaces/_src_api_layoutapi_.layoutapi.html"
            target="_blank"
          >
            Layout Api
          </a>{' '}
          |{' '}
          <a
            href="https://api.adaptabletools.com/interfaces/_src_adaptableoptions_layoutoptions_.layoutoptions.html"
            target="_blank"
          >
            Layout Options
          </a>{' '}
          |{' '}
          <a
            href="https://github.com/AdaptableTools/adaptable/blob/master/packages/adaptable/readme/functions/layout-function.md"
            target="_blank"
          >
            Layout Read Me
          </a>{' '}
        </div>
      }
    />
  );
};
