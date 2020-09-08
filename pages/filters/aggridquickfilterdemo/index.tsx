import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/filter/aggridquickfilterdemo')}
      pageTitle={'Quick Filter Bar Demo'}
      description={
        <div>
          <p>
            The Quick Filter Bar lies beneath the Column Header, providing a
            shortcut to creating Column Filters manually in the filter dropdown
            - the 2 components always stay in sync.
          </p>
          <p>
            The left of the Quick Filter Bar provides a dropdown showing all the
            'Predicates' available for that Column, including any{' '}
            <a href="aggridcustompredicatesdemo">Custom Predicates</a> that have
            been created.
          </p>

          <p>
            Any Predicate that requires an input (e.g. 'GreaterThan') will show
            a textbox to enable text entry; those that do not (e.g. 'Postive')
            will show it as disabled.
          </p>
          <p>
            If the 'IN' predicate is selected then a list will appear showing
            all distinct values in the column to enable a selection to be made.
          </p>

          <p>
            You can change also select frequently used Predicates by typing a
            'wild card' in the Quick Filter Bar, e.g. {'>'}, {'<'},{'='}, {'!='}{' '}
            and {'IN'} (for lists) - press 'Escape' to clear the Predicate.
          </p>
          <p>
            The default Predicate for Numeric and Date columns is 'Equals' and
            for String columns is 'Between'.
          </p>
        </div>
      }
      helpResources={
        <div>
          <a
            href="https://api.adaptabletools.com/interfaces/_src_predefinedconfig_filterstate_.filterstate.html"
            target="_blank"
          >
            Filter Config
          </a>{' '}
          |{' '}
          <a
            href="https://api.adaptabletools.com/interfaces/_src_api_filterapi_.filterapi.html"
            target="_blank"
          >
            Filter Api
          </a>{' '}
          |{' '}
          <a
            href="https://github.com/AdaptableTools/adaptable/blob/master/packages/adaptable/readme/functions/filter-function.md"
            target="_blank"
          >
            Filter ReadMe
          </a>
          .
        </div>
      }
    />
  );
};
