import React from 'react';
import DynamicDemoPage from '../../src/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../src/client/aggridbasicdemo')}
      pageTitle={'AdaptableBlotter.JS basic ag-Grid Demo'}
      description={
        <div>
          <h4>Basic ag-Grid Demo</h4>
          <p>The Adaptable Blotter offers 30 functions out of the box.</p>
          <p>
            This example no Predefined Configuration and no overriden Blotter
            objects.
          </p>
        </div>
      }
    />
  );
};
