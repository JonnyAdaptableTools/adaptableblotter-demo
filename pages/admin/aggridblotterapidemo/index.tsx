import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/admin/aggridblotterapidemo')}
      pageTitle={'Adaptable API Demo'}
      description={
        <div>
          <p>
            AdapTable includes a very rich API that offers full programmatic
            access to all functionality and AdapTable state.
          </p>
          <p>
            There are hundreds of functions in the{' '}
            <a
              href="https://api.adaptabletools.com/interfaces/_src_api_adaptableapi_.adaptableapi"
              target="_blank"
            >
              Adaptable API
            </a>
            , that allow you to do programmatically - through code - everything
            that is available via the GUI or Config,{' '}
          </p>
          <p>
            This allows you to bypass the AdapTable GUI if you so desire but
            still to have access to the core objects and thereby allow AdapTable
            to manage all the complexities around state managements.
          </p>
          <p>
            In this example we create our own form controls (external to the
            AdapTable instance) but we call the QuickSearch API to run and clear
            Quick Search, Dashboard API to manage Dashboard visibility, Layout
            API to load a layout and Column Chooser API to show the column
            chooser. Note that the functions run as if you were using AdapTable
            and that all State is stored (refresh the page to see).
          </p>
        </div>
      }
      helpResources={
        <div>
          <a
            href="https://api.adaptabletools.com/interfaces/_src_api_adaptableapi_.adaptableapi"
            target="_blank"
          >
            Adaptable API
          </a>
          ,{' '}
          <a
            href="https://adaptabletools.zendesk.com/hc/en-us/articles/360002754777-Adaptable-API"
            target="_blank"
          >
            User Guide
          </a>{' '}
          .
        </div>
      }
    />
  );
};
