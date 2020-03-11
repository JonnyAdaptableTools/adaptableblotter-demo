import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/state/statefunctionsdemo')}
      pageTitle={'State Functions Demo'}
      description={
        <div>
          <p>
            The configuration below is shared with everyone who uses this page.
            So you can open another browser tab at this url - play around with
            the AdapTable instance below in one tab (add searches, change
            layout, etc) and then reload the other tab - should be syncronized
            and pick things up from where they were in the initial tab.
          </p>
        </div>
      }
      helpResources={null}
    />
  );
};
