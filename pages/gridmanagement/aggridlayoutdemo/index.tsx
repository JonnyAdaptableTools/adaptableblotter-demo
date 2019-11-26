import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/grid/aggridlayoutdemo')}
      pageTitle={'Layout Demo'}
      description={
        <div>
          <h4>Layouts (Views) Demo</h4>
          <p>
            Use Layouts to manage sets of column visibility, order, sorting and
            grouping.
          </p>
          <p>
            Whereas the search functions determine <b>row </b>visibility,
            layouts manage <b>column</b> visibility and order (plus sorting,
            grouping and pivoting). They can include all grid state (e.g.
            grouping) and save automatially when changed.
          </p>
          <p>
            This example has 4 layouts: <i>Simple Layout</i>: a basic layout
            (which includes a Calculated Column; <i>Sorting Layout</i> which
            contains 2 sorted columns (one with a Custom Sort);{' '}
            <i>Grouping Layout</i>: which groups on the 'Employee' and 'Ship
            Country' column; and <i>Pivoting Layout</i> which stores pivoting
            information.
          </p>
          <p>
            <b>Adaptable Blotter Help Resources:</b>{' '}
            <a
              href="https://api.adaptableblotter.com/interfaces/_predefinedconfig_layoutstate_.layoutstate.html"
              target="_blank"
            >
              Predefined Config
            </a>
            ,{' '}
            <a
              href="https://api.adaptableblotter.com/interfaces/_api_layoutapi_.layoutapi.html"
              target="_blank"
            >
              Blotter API
            </a>
            ,{' '}
            <a
              href="https://adaptabletools.zendesk.com/hc/en-us/articles/360002170317-Layouts-FAQ"
              target="_blank"
            >
              FAQ
            </a>
            ,{' '}
            <a
              href=" https://adaptabletools.zendesk.com/hc/en-us/articles/360029743312-Layout-Videos"
              target="_blank"
            >
              Videos
            </a>
            ,{' '}
            <a
              href="https://adaptabletools.zendesk.com/hc/en-us/articles/360002755197-Grid-Functions"
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
