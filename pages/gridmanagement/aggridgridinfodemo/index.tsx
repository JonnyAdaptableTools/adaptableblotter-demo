import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/grid/aggridgridinfodemo')}
      pageTitle={'Grid Info Demo'}
      description={
        <div>
          <h4>Grid Info Demo</h4>
          <p>
            The Grid Info button (the button in the Home Toolbar with the info
            sign) provides at a glace summary information about your instance of
            the Adaptable Blotter.
          </p>
          <p>
            It contains 2 tabs: <b>Grid Properties</b> which provides licence,
            column and row information for the grid, and <b>Blotter Options</b>{' '}
            which displays your AdaptableBlotterOptions values.
          </p>
          <p>
            You can turn this off by setting <i>ShowAboutButton</i> to false in
            in{' '}
            <a
              href="https://adaptabletools.zendesk.com/hc/en-us/articles/360028901111-Dashboard-Config"
              target="_blank"
            >
              Dashboard Config
            </a>
            .
          </p>
          <p>
            <b>Adaptable Blotter Help Resources:</b>{' '}
            <a
              href="https://adaptabletools.zendesk.com/hc/en-us/articles/360005113312-Cell-Summary"
              target="_blank"
            >
              User Guide
            </a>
            ,{' '}
            <a
              href="https://adaptabletools.zendesk.com/hc/en-us/articles/360028900931-Cell-Summaries-Config"
              target="_blank"
            >
              Predefined Config
            </a>{' '}
          </p>
        </div>
      }
    />
  );
};
