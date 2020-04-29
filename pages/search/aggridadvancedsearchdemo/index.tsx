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
            It contains an Expression / Query - something used in many
            AdaptableFunctions) that allows selections to be performed on a mix
            of Column Values, Filters and Ranges.
          </p>
          <p>
            When an Advanced Search is applied, AdapTable will only display
            those rows that match <b>all</b> of the Conditions in the Query.
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
          </a>{' '}
          |{' '}
          <a
            href="https://api.adaptabletools.com/interfaces/_src_adaptableoptions_searchoptions_.searchoptions.html"
            target="_blank"
          >
            Search Options
          </a>{' '}
          |{' '}
          <a
            href="https://api.adaptabletools.com/interfaces/_src_api_advancedsearchapi_.advancedsearchapi.html"
            target="_blank"
          >
            Adaptable API
          </a>{' '}
          |{' '}
          <a
            href="https://github.com/AdaptableTools/adaptable/blob/master/packages/adaptable/readme/functions/adavanced-search-function.md"
            target="_blank"
          >
            Read Me
          </a>{' '}
        </div>
      }
    />
  );
};
