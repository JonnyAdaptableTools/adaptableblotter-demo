import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/toolpanel/aggridtoolpanelnamedemo')}
      pageTitle={'Tool Panel Name Demo'}
      description={
        <div>
          <p>
            By default the name of the AdapTable Tool Panel (which appears down
            the side of the control) is 'AdapTable'.
          </p>
          <p>
            You can change this by setting the <b>adaptableToolPanelTitle</b>{' '}
            property in{' '}
            <a
              href="https://api.adaptabletools.com/interfaces/_adaptableoptions_userinterfaceoptions_.userinterfaceoptions.html#adaptabletoolpaneltitle"
              target="_blank"
            >
              UserInterfaceOptions
            </a>
            .
          </p>
          <p>
            In this example we have set the name of the Tool Panel to 'Grid
            Management'
          </p>
        </div>
      }
      helpResources={
        <div>
          <a
            href="https://api.adaptabletools.com/interfaces/_predefinedconfig_toolpanelstate_.toolpanelstate.html"
            target="_blank"
          >
            Predefined Config
          </a>
          ,{' '}
          <a
            href="https://api.adaptabletools.com/interfaces/_api_toolpanelapi_.toolpanelapi.html"
            target="_blank"
          >
            Adaptable API
          </a>
          ,{' '}
          <a
            href="https://adaptabletools.zendesk.com/hc/en-us/articles/360004952777-ToolPanel-FAQ"
            target="_blank"
          >
            FAQ
          </a>
          ,{' '}
          <a
            href="https://adaptabletools.zendesk.com/hc/en-us/articles/360002774498-Dashboard"
            target="_blank"
          >
            User Guide
          </a>
          .
        </div>
      }
    />
  );
};
