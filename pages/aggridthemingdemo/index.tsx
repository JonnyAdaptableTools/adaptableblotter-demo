import React from 'react';
import DynamicDemoPage from '../../src/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../src/client/aggridthemingdemo')}
      pageTitle={'AdaptableBlotter.JS ag-Grid Theming Demo'}
      description={
        <p>
          <b>Setting the Thme</b>
          This example shows the Adaptable Blotter with the 'Dark Theme'
          selected.
          <br />
          This theme can be changed by selecting a new value from the Theme
          dropdown in the Toolbar (which we have made visible)
        </p>
      }
    />
  );
};
