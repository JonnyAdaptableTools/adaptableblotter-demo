import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/search/aggridcurrentquerydemo')}
      pageTitle={'Current Query Demo'}
      description={
        <div>
          <p>
            Query is a very powerful function that uses an 'Expression' to
            search across mutliple columns using many functions and operators.{' '}
          </p>
          <p>
            The Query can be named, saved and re-used - not only for searching
            but in other functions use Expressions (e.g. Conditional Style,
            Export).
          </p>
          <p>
            When the Query runs, AdapTable will only display those rows that
            match <b>all</b> of the Conditions in the Query.
          </p>
          <p>
            In this example we are searching for any rows where the Employee is
            Robert King or Andrew Fuller and where the Order Cost is over $1000.
          </p>

          <p>
            We have created 2 other queries which we have shared - and one is
            used for a Conditional Style
          </p>
        </div>
      }
      helpResources={
        <div>
          <a
            href="https://github.com/AdaptableTools/adaptable/blob/master/packages/adaptable/readme/functions/query-function.md"
            target="_blank"
          >
            Query Read Me
          </a>{' '}
          |{' '}
          <a
            href="https://api.adaptabletools.com/interfaces/_src_predefinedconfig_querystate_.querystate.html"
            target="_blank"
          >
            Query Predefined Config
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
            href="https://api.adaptabletools.com/interfaces/_src_api_queryapi_.queryapi.html"
            target="_blank"
          >
            Query API
          </a>{' '}
        </div>
      }
    />
  );
};
