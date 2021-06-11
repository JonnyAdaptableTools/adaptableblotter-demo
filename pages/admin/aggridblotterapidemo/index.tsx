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
              href="https://docs.adaptabletools.com/docs/adaptable-api/adaptable-api-overview"
              target="_blank"
            >
              Adaptable Api
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
            AdapTable instance) but we call the QuickSearch Api to run and clear
            Quick Search, Dashboard Api to manage Dashboard visibility, Layout
            Api to load a layout and Custom Sort Api to open that window. Note
            that the functions run as if you were using AdapTable and that all
            State is stored (refresh the page to see).
          </p>
        </div>
      }
      helpResources={
        <div>
          <a
            href="https://docs.adaptabletools.com/docs/adaptable-api/adaptable-api-overview"
            target="_blank"
          >
            Adaptable Api
          </a>
        </div>
      }
    />
  );
};
