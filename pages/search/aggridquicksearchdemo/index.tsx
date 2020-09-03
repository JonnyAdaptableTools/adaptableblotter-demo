import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/search/aggridquicksearchdemo')}
      pageTitle={'Quick Search Demo'}
      description={
        <div>
          <p>
            Quick Search enables you to quickly find matching text across all{' '}
            <b>visible</b> columns.{' '}
          </p>
          <p>
            Because it is such a popular function we have embedded it in the
            right hand side of the Dashboard Header (though there is also a
            Quick Search Toolbar you can use)
          </p>
          <p>
            Quick Search Predefined Config allows you to set the style of
            matched cells - which we have done in this example by setting a
            darker yellow background with a brown font.
          </p>
        </div>
      }
      helpResources={
        <div>
          <a
            href="https://api.adaptabletools.com/interfaces/_src_predefinedconfig_quicksearchstate_.quicksearchstate.html"
            target="_blank"
          >
            Quick Search Predefined Config
          </a>{' '}
          |{' '}
          <a
            href="https://api.adaptabletools.com/interfaces/_src_api_quicksearchapi_.quicksearchapi.html"
            target="_blank"
          >
            Quick Search Api
          </a>{' '}
          |{' '}
          <a
            href="https://github.com/AdaptableTools/adaptable/blob/master/packages/adaptable/readme/functions/quick-search-function.md"
            target="_blank"
          >
            Quick Search Read Me
          </a>
        </div>
      }
    />
  );
};
