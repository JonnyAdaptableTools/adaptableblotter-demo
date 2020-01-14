import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import(
        '../../../src/client/adaptableoptions/aggridautoapplyfiltersdemo'
      )}
      pageTitle={'Auto Apply Filters Demo'}
      description={
        <div>
          <h4>Auto Apply Filters Demo</h4>
          <p>
            By default AdapTable will apply the column filters as soon as an
            item in the filter menu is clicked.
          </p>
          <p>
            However sometimes this is not the desired behaviour, particularly if
            you are filtering on the server and want to make one call at the end
            after all filters have been selected.
          </p>
          <p>
            If you want to do this, then simply set the <b>autoApplyFilter</b>{' '}
            in{' '}
            <a
              href="https://api.adaptableblotter.com/interfaces/_adaptableoptions_filteroptions_.filteroptions.html#autoapplyfilter"
              target="_blank"
            >
              Filter Options
            </a>{' '}
            to false (the default is true).
          </p>
          <p>
            In this example we have set the <i>autoApplyFilter</i> property to
            false which is why a button appears in each column filter, and the
            filter is only applied when it is clicked.
          </p>
        </div>
      }
    />
  );
};
