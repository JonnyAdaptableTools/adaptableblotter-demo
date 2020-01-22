import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import(
        '../../../src/client/adaptableoptions/aggridexcludecolumnsfromquicksearchdemo'
      )}
      pageTitle={'Exclude Quick Search Columns Demo'}
      description={
        <div>
          <h4>Exclude Quick Search Columns Demo</h4>
          <p>
            By default AdapTable will search every visible column when running
            Quick Seach.
          </p>
          <p>
            If you wish to exclude certain columns from being included, provide
            a <b>excludeColumnFromQuickSearch</b> function in{' '}
            <a
              href="https://api.adaptabletools.com/interfaces/_adaptableoptions_searchoptions_.searchoptions.html#excludecolumnfromquicksearch"
              target="_blank"
            >
              Search Options
            </a>{' '}
            and set it to return <i>true</i> for any column that you want
            excluded.
          </p>
          <p>
            In this example our function will exclude the <i>Contact</i> Column
            which is why 'Maria Larsson' does not show up in the result set.
          </p>
          <p>
            <b>AdapTable Help Resources:</b>{' '}
            <a
              href="https://api.adaptabletools.com/interfaces/_adaptableoptions_searchoptions_.searchoptions.html"
              target="_blank"
            >
              Adaptable Options
            </a>
          </p>{' '}
        </div>
      }
    />
  );
};
