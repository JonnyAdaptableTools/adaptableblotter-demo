import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/layout/aggridgroupedlayoutdemo')}
      pageTitle={'Grouped Layout Demo'}
      description={
        <div>
          <p>Grouped Layout </p>
        </div>
      }
      helpResources={
        <div>
          <a
            href="https://api.adaptabletools.com/interfaces/_src_predefinedconfig_layoutstate_.layoutstate.html"
            target="_blank"
          >
            Predefined Config
          </a>{' '}
          |{' '}
          <a
            href="https://api.adaptabletools.com/interfaces/_src_api_layoutapi_.layoutapi.html"
            target="_blank"
          >
            Adaptable API
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
            Read Me
          </a>{' '}
        </div>
      }
    />
  );
};
