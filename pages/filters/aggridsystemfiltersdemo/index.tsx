import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/filter/aggridsystemfiltersdemo')}
      pageTitle={'System Filters Demo'}
      description={
        <div>
          <p>
            AdapTable provides a range of useful System Filters (e.g. 'Blanks',
            'Zero', 'Yesterday') to complement any User Filters or Named Filters
            provided by you.
          </p>
          <p>
            They appear in italics at the top of the Column Filter form (above
            individual column values) and can also be used when creating
            Queries.
          </p>
          <p>
            By default <b>all</b> System Filters will be shown. However in{' '}
            <a
              href="https://api.adaptabletools.com/interfaces/_src_predefinedconfig_systemfilterstate_.systemfilterstate.html"
              target="_blank"
            >
              Sytem Filter State
            </a>
            , you can stipulate to show none (by passing in an empty array) or
            to select just those that you want.
          </p>

          <p>
            In this example we have stipulated that just 2 System Filters are
            used: Positive and Zero (both for Number columns) and then used it
            on 'Order Chg.' column.
          </p>
        </div>
      }
      helpResources={
        <div>
          <a
            href="https://api.adaptabletools.com/interfaces/_src_predefinedconfig_systemfilterstate_.systemfilterstate.html"
            target="_blank"
          >
            Predefined Config
          </a>{' '}
          |{' '}
          <a
            href="https://api.adaptabletools.com/interfaces/_src_api_systemfilterapi_.systemfilterapi.html"
            target="_blank"
          >
            Adaptable API
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
