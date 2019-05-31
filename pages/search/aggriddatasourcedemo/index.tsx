import React from 'react';
import DynamicDemoPage from '../../../src/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/aggriddatasourcedemo')}
      pageTitle={'Data Source Demo'}
      description={
        <div>
          <h4>Data Source</h4>
          <p>To do</p>
          <p>To</p>
          <p>In this example to do</p>
          <p>
            <b>Adaptable Blotter Help Resources:</b>{' '}
            <a
              href="https://adaptabletools.zendesk.com/hc/en-us/articles/360005167931-Advanced-Search"
              target="_blank"
            >
              User Guide
            </a>
            ,{' '}
            <a
              href="https://adaptabletools.zendesk.com/hc/en-us/articles/360028900991-Advanced-Search-Config"
              target="_blank"
            >
              Predefined Config
            </a>
            ,{' '}
            <a
              href="https://adaptabletools.zendesk.com/hc/en-us/articles/360028585192-Advanced-Search-API"
              target="_blank"
            >
              Blotter API
            </a>
            ,{' '}
            <a
              href="https://adaptabletools.zendesk.com/hc/en-us/articles/360009004951-Advanced-Search-FAQ"
              target="_blank"
            >
              FAQ
            </a>
            ,{' '}
            <a
              href="https://adaptabletools.zendesk.com/hc/en-us/articles/360005113032-Queries"
              target="_blank"
            >
              Queries
            </a>{' '}
            and{' '}
            <a
              href="https://adaptabletools.zendesk.com/hc/en-us/articles/360028637652-Advanced-Search-Videos"
              target="_blank"
            >
              Videos
            </a>
            .
          </p>
        </div>
      }
    />
  );
};
