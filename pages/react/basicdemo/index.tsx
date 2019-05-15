import React from 'react';
import dynamic from 'next/dynamic';

const DynamicComponent = dynamic(
  () => import('../../../src/client/react/basic-demo/index-demo'),
  {
    loading: () => null,
    ssr: false,
  }
);

import ReactDemoPage from '../../../src/ReactDemoPage';

export default () => {
  return (
    <ReactDemoPage
      pageTitle={'AdaptableBlotter.JS React ag-Grid Demo'}
      description={
        <h4>
          A demo of AdaptableBlotter.JS instantiated using the{' '}
          <a
            href="https://github.com/JonnyAdaptableTools/adaptableblotter/blob/master/packages/adaptableblotter-react-aggrid/"
            target="_blank"
          >
            React Wrapper
          </a>{' '}
          (adaptableblotter-react-aggrid)
        </h4>
      }
    >
      <DynamicComponent />
    </ReactDemoPage>
  );
};
