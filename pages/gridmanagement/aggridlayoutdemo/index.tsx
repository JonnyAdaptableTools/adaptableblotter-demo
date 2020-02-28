import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/grid/aggridlayoutdemo')}
      pageTitle={'Layout (Views) Demo'}
      description={
        <div>
          <p>
            Use Layouts to manage sets of column visibility and order. Layouts
            can also include column sorting, grouping and pivoting information
            and can save automatially when changed
          </p>
          <p>
            The search and filter functions determine <b>row</b> visibility and
            order, while layouts manage <b>column</b> visibility and order. .
          </p>
          <p>
            This example has 5 layouts:
            <ul>
              <li>
                <i>Simple Layout</i>: a basic layout (which includes a
                Calculated Column;{' '}
              </li>
              <li>
                <i>Sorting Layout</i> which contains 2 sorted columns (one with
                a Custom Sort);
              </li>
              <li>
                <i>Grouping Layout</i>: which groups on the 'Employee' and 'Ship
                Country' column;
              </li>
              <i>Pivoting Layout</i> which stores pivoting information.
              <li>
                <i>Advanced Layout</i>: bit of everything
              </li>
            </ul>{' '}
          </p>
        </div>
      }
      helpResources={
        <div>
          <a
            href="https://api.adaptabletools.com/interfaces/_predefinedconfig_layoutstate_.layoutstate.html"
            target="_blank"
          >
            Predefined Config
          </a>
          ,{' '}
          <a
            href="https://api.adaptabletools.com/interfaces/_api_layoutapi_.layoutapi.html"
            target="_blank"
          >
            Adaptable API
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
        </div>
      }
    />
  );
};
