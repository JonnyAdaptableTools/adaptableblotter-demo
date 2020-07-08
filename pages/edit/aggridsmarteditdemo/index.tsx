import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/edit/aggridsmarteditdemo')}
      pageTitle={'Smart Edit Demo'}
      description={
        <div>
          <p>
            The Smart Edit function allows you to update multiple, contiguous
            numeric cells with a single mathematical operation (e.g. Multiply)
            and value.
          </p>
          <p>
            It remembers the previous operation you used which is stored with
            your state. Forthcoming updates will allow you to update by % or
            bps.
          </p>
          <p>
            In this example we have set the Smart Edit operation to be 'Add' and
            the value to be 100. Try highlighting some cells in the 'Invoiced'
            column and then clicking the tick in the Smart Edit toolbar.
          </p>
        </div>
      }
      helpResources={
        <div>
          <a
            href="https://api.adaptabletools.com/interfaces/_src_predefinedconfig_smarteditstate_.smarteditstate.html"
            target="_blank"
          >
            Predefined Config
          </a>{' '}
          |{' '}
          <a
            href="https://api.adaptabletools.com/interfaces/_src_api_smarteditapi_.smarteditapi.html"
            target="_blank"
          >
            Adaptable API
          </a>
        </div>
      }
    />
  );
};
