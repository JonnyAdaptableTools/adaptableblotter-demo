import React from 'react';
import DynamicDemoPage from '../../src/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../src/client/aggridconfigdemo')}
      pageTitle={'AdaptableBlotter.JS ag-Grid Config Demo'}
      description={
        <div>
          <h4>AdaptableBlotter.JS - Predefined Config Demo</h4>
          <p>
            This demo shows a grid with some Predefined Config pre-shipped.{' '}
          </p>
          <p>
            The config includes: 2 Layouts, 2 Conditional Styles, 1 Report, 1
            Custom Sort and some Dashboard changes.
          </p>
          <p>
            As well as pre-loading state you can also automatically save state.
            Edit these objects or create some of your own and refresh the page
            and you will see the Blotter will reload with your changes.
          </p>
        </div>
      }
    />
  );
};
