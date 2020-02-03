import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/editor/basic')}
      pageTitle={'Editor Demo'}
      description={<div></div>}
    />
  );
};
