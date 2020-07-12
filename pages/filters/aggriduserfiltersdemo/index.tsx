import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/filter/aggriduserfiltersdemo')}
      pageTitle={'User Filters Demo'}
      description={
        <div>
          <p>
            User Filters are, essentially, saved and named Column Filters that
            you can re-use throughout the application.
          </p>
          <p>
            By creating a User Filter, you are able to define a particular set
            of column data that has specific meaning to you and then use it not
            only as a column filter, but also in queries more generally.
          </p>
          <p>
            In this example we create 2 User Filters: <i>My Team</i> in the
            'Employee' column that we then re-use a Column Filter, and{' '}
            <i>Small Invoices</i> on the 'Invoiced' Column that we re-use in a
            Conditional Style.{' '}
          </p>
          <p>
            We use both the User Filters in the 'Team Small Invoices' Report
            which is the currently selected Export.
          </p>
        </div>
      }
      helpResources={
        <div>
          <a
            href="https://api.adaptabletools.com/interfaces/_src_predefinedconfig_userfilterstate_.userfilterstate.html"
            target="_blank"
          >
            User Filter Config
          </a>{' '}
          |{' '}
          <a
            href="https://api.adaptabletools.com/interfaces/_src_api_userfilterapi_.userfilterapi.html"
            target="_blank"
          >
            User Filter Api
          </a>{' '}
          |{' '}
          <a
            href="https://github.com/AdaptableTools/adaptable/blob/master/packages/adaptable/readme/guides/adaptable-filtering-guide.md"
            target="_blank"
          >
            Adaptable Filtering Guide
          </a>
        </div>
      }
    />
  );
};
