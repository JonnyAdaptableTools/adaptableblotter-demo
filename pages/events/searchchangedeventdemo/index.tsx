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
            The{' '}
            <a
              href="https://docs.adaptabletools.com/docs/adaptable-events/search-changed-event"
              target="_blank"
            >
              Search Changed Event
            </a>{' '}
            is fired whenever any of the Search or Sort criteria in AdapTable
            are updated.
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
            href="https://docs.adaptabletools.com/docs/adaptable-events/adaptable-events-overview"
            target="_blank"
          >
            Adaptable Events
          </a>{' '}
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/adaptable-events/search-changed-event"
            target="_blank"
          >
            Search Changed Event
          </a>{' '}
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/adaptable-options/search-options#serversearchoption"
            target="_blank"
          >
            Search Options
          </a>{' '}
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/key-topics/server-functionality"
            target="_blank"
          >
            Server Functionality Guide
          </a>
        </div>
      }
    />
  );
};
