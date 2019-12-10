import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/search/aggridsystemfiltersdemo')}
      pageTitle={'System Filters Demo'}
      description={
        <div>
          <h4>System Filters Demo</h4>

          <p>
            The Adaptable Blotter provides a range of useful System Filters
            (e.g. 'Blanks', 'Zero', 'Yesterday') to complement any User Filters
            or Named Filters provided by you.
          </p>
          <p>
            They appear in italics at the top of the Column Filter form (above
            individual column values) and can also be used when creating
            Queries.
          </p>
          <p>
            By default <b>all</b> System Filters will be shown. However in{' '}
            <a
              href="https://api.adaptableblotter.com/interfaces/_predefinedconfig_systemfilterstate_.systemfilterstate.html"
              target="_blank"
            >
              Sytem Filter State
            </a>
            , you can stipulate to show none (by passing in an empty array) or
            to select just those that you want.
          </p>

          <p>
            In this example we have stipulated that just 2 System Filters are
            used: Positive and Zero (both for Number columns).
          </p>
          <p>
            <b>Adaptable Blotter Help Resources:</b>{' '}
            <a
              href="https://api.adaptableblotter.com/interfaces/_predefinedconfig_systemfilterstate_.systemfilterstate.html"
              target="_blank"
            >
              Predefined Config
            </a>
            ,{' '}
            <a
              href="https://api.adaptableblotter.com/interfaces/_api_systemfilterapi_.systemfilterapi.html"
              target="_blank"
            >
              Blotter API
            </a>
            ,{' '}
            <a
              href="https://adaptabletools.zendesk.com/hc/en-us/articles/360029896011-Filter-FAQ"
              target="_blank"
            >
              FAQ
            </a>
            ,{' '}
            <a
              href="https://adaptabletools.zendesk.com/hc/en-us/articles/360002754677-Filters"
              target="_blank"
            >
              User Guide
            </a>
            .
          </p>
        </div>
      }
    />
  );
};
