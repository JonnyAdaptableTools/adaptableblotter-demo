import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/events/searchchangedeventdemo')}
      pageTitle={'Search Changed Demo'}
      description={
        <div>
          <p>
            The Search Changed event is fired whenever any of the Search or Sort
            criteria in AdapTable are updated.
          </p>
          <p>
            Its particularly useful if you want to run searching or filtering on
            the server.
          </p>
        </div>
      }
      helpResources={
        <div>
          <a
            href="https://api.adaptabletools.com/interfaces/_src_api_eventapi_.eventapi.html"
            target="_blank"
          >
            Event API
          </a>{' '}
          |{' '}
          <a
            href="https://api.adaptabletools.com/interfaces/_src_adaptableoptions_searchoptions_.searchoptions.html#serversearchoption"
            target="_blank"
          >
            Search Options
          </a>{' '}
          |{' '}
          <a
            href="https://github.com/AdaptableTools/adaptable/blob/master/packages/adaptable/readme/guides/adaptable-server-functionality-guide.md"
            target="_blank"
          >
            AdapTable Server Functionality Guide
          </a>
        </div>
      }
    />
  );
};
