import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/queries/aggridcurrentquerydemo')}
      pageTitle={'Current Query Demo'}
      description={
        <div>
          <p>
            Query is a very powerful function that uses an 'Expression' to
            search across mutliple columns using many functions and operators.{' '}
          </p>
          <p>
            When the Query runs, AdapTable will only display those rows that
            match <b>all</b> of the Conditions in the Query.
          </p>
          <p>In this example we are searching for the following query:</p>
          <p>
            <b>
              ( [ShipCountry] IN ("UK", "USA") AND ENDS_WITH ([ShipVia], 's') ){' '}
              OR [ItemCount] {'<'} 5)
            </b>
          </p>
          <p>
            This will find any rows where the either both the ShipCountry is UK
            or USA or ShipVia ends with the letter 's'; or where the ItemCount
            is less than 5.
          </p>
        </div>
      }
      helpResources={
        <div>
          <a
            href="https://docs.adaptabletools.com/docs/adaptable-modules/query-module"
            target="_blank"
          >
            Query Module
          </a>{' '}
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/common-objects/common-objects-query"
            target="_blank"
          >
            Adaptable Expression
          </a>{' '}
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/predefined-config/query-config"
            target="_blank"
          >
            Query Config
          </a>{' '}
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/adaptable-options/search-options"
            target="_blank"
          >
            Search Options
          </a>{' '}
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/adaptable-api/query-api"
            target="_blank"
          >
            Query API
          </a>{' '}
        </div>
      }
    />
  );
};
