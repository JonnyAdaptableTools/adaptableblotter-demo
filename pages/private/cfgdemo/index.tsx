import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/private/cfgdemo')}
      pageTitle={'CFG Demo'}
      description={
        <div>
          <h4>CFG Demo</h4>
          <p>
            We can add some explanation of the Grid here - this page is private
            and cannot be reached by any links.
          </p>
        </div>
      }
    />
  );
};
