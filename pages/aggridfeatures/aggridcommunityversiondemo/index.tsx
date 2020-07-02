import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import(
        '../../../src/client/aggridfeatures/aggridcommunityversiondemo'
      )}
      pageTitle={'Community Version Demo'}
      description={
        <div>
          <p>
            This demo shows AdapTable using ag-Grid in Community mode with NONE
            of the ag-Grid Enterprise features available.
          </p>
        </div>
      }
    />
  );
};
