import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/alerts/aggridalertdemo')}
      pageTitle={'Alerts Demo'}
      description={
        <div>
          <p>Create alerts when data changes in way you need to know about.</p>
          <p>
            You can create alerts to appear in response to a wide variety of
            data changes both user edits and in the data source. Choose whether
            Alerts as popups, in the toolbar, or both.
          </p>
          <p>
            This example has 2 alerts: One fires a warning and popup when the
            'Invoiced' column > 2000 (make this edit and see for yourself). The
            other fires an info alert in the toolbar when the 'Item Count'
            doubles (we mimic this by having dummy ticking data which will
            randomly trigger the alert which you should see appear in the
            toolbar).
          </p>
        </div>
      }
      helpResources={
        <div>
          <a
            href="https://api.adaptabletools.com/interfaces/_src_predefinedconfig_alertstate_.alertstate.html"
            target="_blank"
          >
            Predefined Config
          </a>
          ,{' '}
          <a
            href="https://api.adaptabletools.com/interfaces/_src_api_alertapi_.alertapi.html"
            target="_blank"
          >
            Adaptable API
          </a>
          ,{' '}
          <a
            href="https://github.com/AdaptableTools/adaptable/blob/master/packages/adaptable/readme/functions/alert-function.md"
            target="_blank"
          >
            Alert Function Read Me
          </a>
        </div>
      }
    />
  );
};
