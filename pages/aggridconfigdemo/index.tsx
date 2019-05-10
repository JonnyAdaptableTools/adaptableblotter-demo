import React from 'react';
import AgGridDemoPage from '../../src/AgGridDemoPage';
import dynamic from 'next/dynamic';

const DynamicComponent = dynamic(
  () => import('../../src/client/aggridconfigdemo'),
  {
    loading: () => null,
    ssr: false,
  }
);

export default () => {
  return (
    <AgGridDemoPage
      pageTitle={'AdaptableBlotter.JS ag-Grid Config Demo'}
      description={
        <div>
          <h4>AdaptableBlotter.JS - Predefined Config Demo</h4>
          <p>
            2 Layouts, 2 Conditional Styles, 1 Report, 1 Custom Sort, Dashboard
            changes etc.
          </p>
        </div>
      }
    >
      <DynamicComponent />
    </AgGridDemoPage>
  );
};
