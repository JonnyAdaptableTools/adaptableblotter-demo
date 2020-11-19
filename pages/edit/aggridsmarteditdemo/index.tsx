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
            href="https://docs.adaptabletools.com/docs/adaptable-functions/smart-edit-function"
            target="_blank"
          >
            Smart Edit Function
          </a>
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/predefined-config/smart-edit-config"
            target="_blank"
          >
            Smart Edit Config
          </a>{' '}
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/adaptable-api/smart-edit-api"
            target="_blank"
          >
            Smart Edit Api
          </a>
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/adaptable-options/edit-options"
            target="_blank"
          >
            Edit Options
          </a>
        </div>
      }
    />
  );
};
