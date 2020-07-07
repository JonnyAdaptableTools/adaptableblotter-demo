import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/aggridfeatures/aggridrowgroupingdemo')}
      pageTitle={'Row Grouping Demo'}
      description={
        <div>
          <p>
            The grid is using ag-Grid row grouping to group by the 'Ship
            Country' column.
          </p>
          <p>
            Note that we have set the 'showGroupingTotalsAsHeader' property in{' '}
            <a
              href="https://api.adaptabletools.com/interfaces/_src_adaptableoptions_generaloptions_.generaloptions.html"
              target="_blank"
            >
              GeneralOptions
            </a>{' '}
            to true so that we can see the aggregated amounts at the top of the
            grid.
          </p>
          <p>
            We have also set the ag-Grid properties{' '}
            <i>groupIncludeTotalFooter</i> and <i>groupIncludeFooter</i> to
            true.
          </p>
        </div>
      }
    />
  );
};
