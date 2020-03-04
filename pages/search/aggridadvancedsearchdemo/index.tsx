import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/search/aggridadvancedsearchdemo')}
      pageTitle={'Advanced Search Demo'}
      description={
        <div>
          <p>
            Advanced Search is a very powerful function that can run searches
            across mutliple columns which can then be named, saved and re-used.
          </p>
          <p>
            It uses Adaptable Query (used in many Functions) that allows
            selections to be performed on a mix of Column Values, Filters and
            Ranges.
          </p>
          <p>
            In this example we are searching for any rows where the Invoiced
            Cost is over $350 (<i>Range</i>), for Orders this year (
            <i>Filter</i>) where the Employee is Janet, Margaret or Robert (
            <i>Column Values</i>).
          </p>
        </div>
      }
      helpResources={
        <div>
          <a
            href="https://api.adaptabletools.com/interfaces/_src_predefinedconfig_advancedsearchstate_.advancedsearchstate.html"
            target="_blank"
          >
            Predefined Config
          </a>
          ,{' '}
          <a
            href="https://api.adaptabletools.com/interfaces/_src_api_advancedsearchapi_.advancedsearchapi.html"
            target="_blank"
          >
            Adaptable API
          </a>
          ,{' '}
          <a
            href="https://adaptabletools.zendesk.com/hc/en-us/articles/360029895971-Advanced-Search-FAQ"
            target="_blank"
          >
            FAQ
          </a>
          ,{' '}
          <a
            href="https://adaptabletools.zendesk.com/hc/en-us/articles/360028637652-Advanced-Search-Videos"
            target="_blank"
          >
            Videos
          </a>
          ,{' '}
          <a
            href="https://adaptabletools.zendesk.com/hc/en-us/articles/360002755137-Search-Functions"
            target="_blank"
          >
            User Guide
          </a>
          .
        </div>
      }
    />
  );
};
