import React from 'react';
import AgGridDemoPage from '../../src/AgGridDemoPage';
import dynamic from 'next/dynamic';
import ThemeDemoPage from '../../src/client/aggridthemingdemo/ThemeDemoPage';

const DynamicComponent = dynamic(
  () => import('../../src/client/aggridthemingdemo'),
  {
    loading: () => null,
    ssr: false,
  }
);

export default () => {
  return (
    <ThemeDemoPage
      pageTitle={'AdaptableBlotter.JS ag-Grid Theming Demo'}
      description={
        <div>
          <h4>AdaptableBlotter.JS - Theming Demo</h4>
          <p>
            Blotter with a Dark Theme and the Dashboard minimised (and a
            different default set of toolbars).
          </p>
        </div>
      }
    >
      <DynamicComponent />
    </ThemeDemoPage>
  );
};
