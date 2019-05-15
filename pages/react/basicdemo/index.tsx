import React from 'react';
import dynamic from 'next/dynamic';

const DynamicComponent = dynamic(() => import('./index-demo'), {
  loading: () => null,
  ssr: false,
});

import ReactDemoPage from '../ReactDemoPage';

export default () => {
  return (
    <ReactDemoPage
      pageTitle={'AdaptableBlotter.JS React ag-Grid Demo'}
      description={
        <h4>
          A demo of AdaptableBlotter.JS integrating with React and ag-Grid with
          NO predefined configuration.
        </h4>
      }
    >
      <DynamicComponent />
    </ReactDemoPage>
  );
};
