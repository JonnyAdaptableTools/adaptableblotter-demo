import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/admin/aggridblotterapidemo')}
      pageTitle={'AdaptableBlotter.JS ag-Grid Blotter API Demo'}
      description={
        <div>
          <h4>
            <h4>Blotter API Demo</h4>
          </h4>
          <p>
            The Adaptable Blotter includes a very rich API that offers full
            programmatic access to all functionality and Blotter state.
          </p>
          <p>
            There are hundreds of functions in the{' '}
            <a
              href="https://api.adaptableblotter.com/interfaces/_api_interface_iblotterapi_.iblotterapi.html"
              target="_blank"
            >
              Adaptable Blotter API
            </a>
            , that allow you to do programmatically - through code - everything
            that is available via the GUI or Config,{' '}
          </p>
          <p>
            This allows you to bypass the Adaptable Blotter GUI if you so desire
            but still to have access to the core objects and thereby allow the
            Adaptable Blotter to manage all the complexities around state
            managements.
          </p>
          <p>
            In this example we create our own form controls (external to the
            Adaptable Blotter) but we call the Blotter API to run and clear
            Quick Search (e.g. <i>api.quickSearchApi.clearQuickSearch()</i>),
            manage Dashboard visibility (e.g. <i>api.dashboardApi.Minimise()</i>
            ) and load a layout <i>api.layoutApi.setLayout('Orders')</i>. Note
            that the functions run as if you were using the Blotter and that all
            State is stored (refresh the page to see).
          </p>
          <p>
            <b>Adaptable Blotter Help Resources:</b>{' '}
            <a
              href="https://adaptabletools.zendesk.com/hc/en-us/articles/360024582972-Blotter-API"
              target="_blank"
            >
              User Guide
            </a>{' '}
            -{' '}
            <a
              href="https://api.adaptableblotter.com/interfaces/_api_interface_iblotterapi_.iblotterapi.html"
              target="_blank"
            >
              Blotter API
            </a>{' '}
            .
          </p>
        </div>
      }
    />
  );
};
