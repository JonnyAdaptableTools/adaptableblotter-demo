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
          <p>
            By default AdapTable will search every visible column when running
            Quick Seach.
          </p>
          <p>
            If you wish to exclude certain columns from being included, provide
            a <b>excludeColumnFromQuickSearch</b> function in{' '}
            <a
              href="https://docs.adaptabletools.com/docs/adaptable-options/search-options#excluding-quick-search"
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
        </div>
      }
      helpResources={
        <div>
          <a
            href="https://docs.adaptabletools.com/docs/adaptable-options/search-options"
            target="_blank"
          >
            Search Options
          </a>
        </div>
      }
    />
  );
};
